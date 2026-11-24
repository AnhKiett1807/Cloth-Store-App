package com.example.cloth.Model;

import java.time.LocalDateTime;

import com.example.cloth.Entity.User;

public record UserResponse(
    Long id,
        String username,
        String email,
        String fullName,
        String role,
        boolean enabled,
        LocalDateTime createDate
) {
    public static UserResponse from(User u) {
        return new UserResponse(
            u.getId(),
            u.getUsername(),
            u.getEmail(),
            u.getFullName(),
            u.getRole(),
            u.isEnabled(),
            u.getCreateDate()
        );
    }
}
