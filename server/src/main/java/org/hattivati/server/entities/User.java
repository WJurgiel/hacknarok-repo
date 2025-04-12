package org.hattivati.server.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.hibernate.annotations.ColumnDefault;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Size(max = 100)
    @Column(name = "name", length = 100)
    private String name;

    @Size(max = 100)
    @Column(name = "surname", length = 100)
    private String surname;

    @Size(max = 100)
    @Column(name = "email", length = 100)
    private String email;

    @Lob
    @Column(name = "password")
    private String password;

    @NotNull
    @Lob
    @Column(name = "role", nullable = false)
    private String role = "USER";

    @NotNull
    @ColumnDefault("0")
    @Column(name = "isBlocked", nullable = false)
    private Boolean isBlocked = false;

    @Column(name = "age")
    private Integer age;

    @Lob
    @Column(name = "gender")
    private String gender;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mainLanguage")
    private Language mainLanguage;

    @OneToMany(mappedBy = "toUser")
    private Set<Message> messages = new LinkedHashSet<>();

    @ManyToMany
    @JoinTable(name = "user_learning_languages",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "language_id"))
    private Set<Language> languages = new LinkedHashSet<>();

    public Set<Language> getLanguages() {
        return languages;
    }

    public void setLanguages(Set<Language> languages) {
        this.languages = languages;
    }

    public Set<Message> getMessages() {
        return messages;
    }

    public void setMessages(Set<Message> messages) {
        this.messages = messages;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Boolean getIsBlocked() {
        return isBlocked;
    }

    public void setIsBlocked(Boolean isBlocked) {
        this.isBlocked = isBlocked;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Language getMainLanguage() {
        return mainLanguage;
    }

    public void setMainLanguage(Language mainLanguage) {
        this.mainLanguage = mainLanguage;
    }

}