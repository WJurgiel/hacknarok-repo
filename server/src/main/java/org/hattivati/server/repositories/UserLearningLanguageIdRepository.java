package org.hattivati.server.repositories;


import org.hattivati.server.entities.Language;
import org.hattivati.server.entities.User;
import org.hattivati.server.entities.UserLearningLanguage;
import org.hattivati.server.entities.UserLearningLanguageId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserLearningLanguageIdRepository extends JpaRepository<UserLearningLanguage, UserLearningLanguageId> {
   boolean existsByUserAndLanguage(User user, Language language);
}