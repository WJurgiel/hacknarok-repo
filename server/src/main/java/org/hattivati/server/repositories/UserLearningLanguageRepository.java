package org.hattivati.server.repositories;


import org.hattivati.server.entities.Language;
import org.hattivati.server.entities.User;
import org.hattivati.server.entities.UserLearningLanguage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserLearningLanguageRepository extends JpaRepository<UserLearningLanguage, Long> {
    // Find all languages for a user
    @Query("SELECT ull.language FROM UserLearningLanguage ull WHERE ull.user.id = :userId")
    List<Language> findLanguagesByUserId(@Param("userId") Integer userId);
}
