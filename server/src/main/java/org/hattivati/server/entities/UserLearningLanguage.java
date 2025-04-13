package org.hattivati.server.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "user_learning_languages")
public class UserLearningLanguage {
    @EmbeddedId
    private UserLearningLanguageId id;

    @MapsId("userId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @MapsId("languageId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "language_id", nullable = false)
    private Language language;

    public UserLearningLanguageId getId() {
        return id;
    }

    public void setId(UserLearningLanguageId id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Language getLanguage() {
        return language;
    }

    public void setLanguage(Language language) {
        this.language = language;
    }

}