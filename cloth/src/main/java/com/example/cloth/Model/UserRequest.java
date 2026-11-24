package com.example.cloth.Model;

public record UserRequest(
    String username,
        String email,
        String password,
        String fullName
) {

}
