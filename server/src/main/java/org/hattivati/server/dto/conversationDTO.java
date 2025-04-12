package org.hattivati.server.dto;

import org.hattivati.server.entities.User;

public class conversationDTO {
    User user1;
    User user2;

    public User getUser1() {
        return user1;
    }

    public void setUser1(User user1) {
        this.user1 = user1;
    }

    public User getUser2() {
        return user2;
    }

    public void setUser2(User user2) {
        this.user2 = user2;
    }
}
