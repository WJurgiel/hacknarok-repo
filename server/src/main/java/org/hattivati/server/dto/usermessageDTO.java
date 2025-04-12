package org.hattivati.server.dto;

import jakarta.validation.constraints.NotBlank;
import org.hattivati.server.entities.User;

import java.time.Instant;

public class usermessageDTO {
    @NotBlank
    String text;

    User fromUser;
    User toUser;

    public @NotBlank String getText() {
        return text;
    }

    public void setText(@NotBlank String text) {
        this.text = text;
    }

    public User getFromUser() {
        return fromUser;
    }

    public void setFromUser(User fromUser) {
        this.fromUser = fromUser;
    }

    public User getToUser() {
        return toUser;
    }

    public void setToUser(User toUser) {
        this.toUser = toUser;
    }

}
