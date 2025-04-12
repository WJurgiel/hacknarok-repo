package org.hattivati.server.dto;
import org.hattivati.server.entities.Message;

import java.time.Instant;

public class getmessageDTO {
    private String text;
    private Instant date;
    private userDTO fromUser;
    private userDTO toUser;

    public Instant getDate() {
        return date;
    }

    public void setDate(Instant date) {
        this.date = date;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public userDTO getFromUser() {
        return fromUser;
    }

    public void setFromUser(userDTO fromUser) {
        this.fromUser = fromUser;
    }

    public userDTO getToUser() {
        return toUser;
    }

    public void setToUser(userDTO toUser) {
        this.toUser = toUser;
    }
// Constructors, getters, setters

    public static getmessageDTO fromEntity(Message message) {
        getmessageDTO dto = new getmessageDTO();
        dto.setText(message.getMessage());
        dto.setDate(message.getDate());
        dto.setFromUser(userDTO.fromEntity(message.getFromUser()));
        dto.setToUser(userDTO.fromEntity(message.getToUser()));
        return dto;
    }
}