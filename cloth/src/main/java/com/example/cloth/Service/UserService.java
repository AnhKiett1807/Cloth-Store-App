package com.example.cloth.Service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.cloth.Entity.User;
import com.example.cloth.Model.UserRequest;
import com.example.cloth.Model.UserResponse;
import com.example.cloth.Repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }
    
    public List<UserResponse> getAllUsers() {
        return userRepository.findAll().stream()
                .map(UserResponse::from)
                .toList();
    }

    public UserResponse getUserById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "User with ID " + id + " not found"));
        return UserResponse.from(user);
    }

    public UserResponse createUser(UserRequest req) {
        if (isBlank(req.username()) || isBlank(req.email()) || isBlank(req.password())) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "Username, email, and password are required");
        }

        if (userRepository.existsByEmail(req.email())) {
            throw new ResponseStatusException(
                    HttpStatus.CONFLICT, "Email is already in use");
        }

        if (userRepository.existsByUsername(req.username())) {
            throw new ResponseStatusException(
                    HttpStatus.CONFLICT, "Username is already in use");
        }

        User user = new User();
        user.setUsername(req.username().trim());
        user.setEmail(req.email().trim());
        user.setPassword(passwordEncoder.encode(req.password()));
        user.setFullName(req.fullName());

        return UserResponse.from(userRepository.save(user));
    }

    private boolean isBlank(String s) {
        return s == null || s.isBlank();
    }
}
