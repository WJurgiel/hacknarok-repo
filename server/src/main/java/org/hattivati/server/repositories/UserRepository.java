package org.hattivati.server.repositories;


import org.hattivati.server.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
