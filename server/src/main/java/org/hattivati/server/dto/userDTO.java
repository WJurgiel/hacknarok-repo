package org.hattivati.server.dto;

import org.hattivati.server.entities.User;

public class userDTO {
    private String name;
    private String email;
    // Include only necessary fields

    // Constructors, getters, setters

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public static userDTO fromEntity(User user) {
        userDTO dto = new userDTO();
        dto.setName(user.getName());
        dto.setEmail(user.getEmail());
        return dto;
    }
}