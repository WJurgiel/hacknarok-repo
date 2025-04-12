package org.hattivati.server.service;

import org.hattivati.server.dto.usermessageDTO;
import org.hattivati.server.entities.Message;
import org.hattivati.server.entities.User;
import org.hattivati.server.dto.registrationFormDTO;
import org.hattivati.server.repositories.MessageRepository;
import org.hattivati.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.hattivati.server.dto.loginFormDTO;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.Instant;

@Service
public class MainService {
    private final PasswordEncoder passwordEncoder;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MessageRepository messageRepository;

    public MainService(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    public void createUser(registrationFormDTO userDTO) {
        User user = new User();
        user.setName(userDTO.getName());
        user.setSurname(userDTO.getSurname());
        user.setAge(userDTO.getAge());
        user.setGender(userDTO.getGender());
        user.setMainLanguage(userDTO.getMainLanguage());
//        user.setLearningLanguages(userDTO.getLearningLanguages());
        String hashedPassword = passwordEncoder.encode(userDTO.getPassword());
        user.setPassword(hashedPassword);
        user.setEmail(userDTO.getEmail());
        userRepository.save(user);
    }
    public boolean isUserValid(loginFormDTO userData) {

        return false;
    }

    public void sendMessage(usermessageDTO msgDTO) {
        Message newmessage = new Message();
        newmessage.setFromUser(msgDTO.getFromUser());
        newmessage.setToUser(msgDTO.getToUser());
        newmessage.setMessage(msgDTO.getText());
        newmessage.setDate(Instant.now());
        messageRepository.save(newmessage);
    }
}
