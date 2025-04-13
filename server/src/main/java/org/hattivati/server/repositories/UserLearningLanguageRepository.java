package org.hattivati.server.repositories;


import org.hattivati.server.entities.User;
import org.hattivati.server.entities.UserLearningLanguage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserLearningLanguageRepository extends JpaRepository<UserLearningLanguage, Long> {

}
