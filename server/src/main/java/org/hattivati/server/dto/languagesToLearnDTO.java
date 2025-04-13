package org.hattivati.server.dto;

import java.util.ArrayList;
import java.util.List;

public class languagesToLearnDTO {
    List<String> languagesToLearn;
    String email;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<String> getLanguagesToLearn() {
        return languagesToLearn;
    }

    public void setLanguagesToLearn(List<String> languagesToLearn) {
        this.languagesToLearn = languagesToLearn;
    }
}
