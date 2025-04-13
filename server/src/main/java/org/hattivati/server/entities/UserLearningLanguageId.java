package org.hattivati.server.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.validation.constraints.NotNull;
import org.hibernate.Hibernate;

import java.util.Objects;

@Embeddable
public class UserLearningLanguageId implements java.io.Serializable {
    private static final long serialVersionUID = 9172800508980506006L;
    @NotNull
    @Column(name = "user_id", nullable = false)
    private Integer userId;

    @NotNull
    @Column(name = "language_id", nullable = false)
    private Integer languageId;

    public UserLearningLanguageId(){}

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getLanguageId() {
        return languageId;
    }

    public void setLanguageId(Integer languageId) {
        this.languageId = languageId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        UserLearningLanguageId entity = (UserLearningLanguageId) o;
        return Objects.equals(this.languageId, entity.languageId) &&
                Objects.equals(this.userId, entity.userId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(languageId, userId);
    }

}