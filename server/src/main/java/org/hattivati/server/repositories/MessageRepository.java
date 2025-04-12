package org.hattivati.server.repositories;


import org.hattivati.server.entities.Message;
import org.hattivati.server.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;
import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {
    @Query("SELECT m FROM Message m WHERE " +
            "(m.fromUser.id = :user1Id AND m.toUser.id = :user2Id) OR " +
            "(m.fromUser.id = :user2Id AND m.toUser.id = :user1Id) " +
            "ORDER BY m.date DESC LIMIT 5")
    ArrayList<Message> findConversation(@Param("user1Id") int user1Id,
                                   @Param("user2Id") int user2Id);
}
