package org.hattivati.server.repositories;


import org.hattivati.server.entities.Message;
import org.hattivati.server.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long> {
}
