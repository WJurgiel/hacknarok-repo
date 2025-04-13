package org.hattivati.server.dto;

import org.hattivati.server.entities.Language;

import java.util.ArrayList;

public class registrationFormDTO {
    private String name;
    private String surname;
    private String email;
    private String password;
    private int age;
    private String gender;
    private String mainLanguage;
    private ArrayList<Language> learningLanguages;

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public int getAge() {
        return age;
    }

    public String getGender() {
        return gender;
    }

    public String getMainLanguage() {
        return mainLanguage;
    }

    public ArrayList<Language> getLearningLanguages() {
        return learningLanguages;
    }

    public registrationFormDTO(String name, String surname, String email, String password, int age, String gender, String mainLanguage, ArrayList<Language> learningLanguages) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.age = age;
        this.gender = gender;
        this.mainLanguage = mainLanguage;
        this.learningLanguages = learningLanguages;
    }


}
