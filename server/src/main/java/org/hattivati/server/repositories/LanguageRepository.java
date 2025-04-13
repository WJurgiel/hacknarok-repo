package org.hattivati.server.repositories;


import org.hattivati.server.entities.Language;
import org.hattivati.server.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LanguageRepository extends JpaRepository<Language, Long> {
    Language findByName(String name);
}
