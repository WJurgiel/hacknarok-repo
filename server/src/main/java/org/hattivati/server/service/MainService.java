package org.hattivati.server.service;

import org.hattivati.server.entities.User;
import org.hattivati.server.dto.registrationFormDTO;
import org.hattivati.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.hattivati.server.dto.loginFormDTO;

@Service
public class MainService {

    @Autowired
    private UserRepository userRepository;

    public void createUser(registrationFormDTO userDTO) {
        User user = new User();
        user.setName(userDTO.getName());
        user.setSurname(userDTO.getSurname());
        user.setAge(userDTO.getAge());
        user.setGender(userDTO.getGender());
        user.setMainLanguage(userDTO.getMainLanguage());
//        user.setLearningLanguages(userDTO.getLearningLanguages());
        String hashedPassword = userDTO.getPassword();
        user.setPassword(hashedPassword);
        user.setEmail(userDTO.getEmail());
        userRepository.save(user);
    }
    public boolean isUserValid(loginFormDTO userData) {

        return false;
    }
}
