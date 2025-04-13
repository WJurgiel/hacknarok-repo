package org.hattivati.server.repositories;


import org.hattivati.server.entities.Message;
import org.hattivati.server.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;
import java.util.List;

public interface ChattersRepository extends JpaRepository<Message, Long> {
    @Query(value = """
    SELECT m.*
    FROM messages m
    JOIN (
        SELECT 
            LEAST(fromUser, toUser) AS user1,
            GREATEST(fromUser, toUser) AS user2,
            MAX(date) AS last_time
        FROM messages
        WHERE fromUser = :userId OR toUser = :userId
        GROUP BY user1, user2
    ) AS grouped
    ON LEAST(m.fromUser, m.toUser) = grouped.user1 
       AND GREATEST(m.fromUser, m.toUser) = grouped.user2 
       AND m.date = grouped.last_time
    ORDER BY m.date DESC
    LIMIT 8
    """, nativeQuery = true)
    ArrayList<Message> findEightLastChatters (@Param("userId") int userId);
}
