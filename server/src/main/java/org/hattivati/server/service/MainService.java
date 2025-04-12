package org.hattivati.server.service;

import org.hattivati.server.dto.*;
import org.hattivati.server.entities.Message;
import org.hattivati.server.entities.User;
import org.hattivati.server.repositories.LanguageRepository;
import org.hattivati.server.repositories.MessageRepository;
import org.hattivati.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.Optional;

@Service
public class MainService {
    private final PasswordEncoder passwordEncoder;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private LanguageRepository languageRepository;

    public MainService(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    public ResponseEntity createUser(registrationFormDTO userDTO) {
        User user = new User();
        user.setName(userDTO.getName());
        user.setSurname(userDTO.getSurname());
        user.setAge(userDTO.getAge());
        user.setGender(userDTO.getGender());
        user.setMainLanguage(languageRepository.findByName(userDTO.getMainLanguage().toLowerCase()));
//        user.setLearningLanguages(userDTO.getLearningLanguages());
        String hashedPassword = passwordEncoder.encode(userDTO.getPassword());
        user.setPassword(hashedPassword);
        user.setEmail(userDTO.getEmail());
        try {
            userRepository.save(user);
            return ResponseEntity.ok().body(user);
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }


    }
    public ResponseEntity isUserValid(loginFormDTO userData) {
        User user = userRepository.findByEmail(userData.getEmail());
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        else{
            if(passwordEncoder.matches(userData.getPassword(), user.getPassword())){
                return ResponseEntity.ok().build();
            }else{
                return ResponseEntity.badRequest().build();
            }
        }
    }

    public void sendMessage(sendmessageDTO msgDTO) {
        Message newmessage = new Message();
        newmessage.setFromUser(msgDTO.getFromUser());
        newmessage.setToUser(msgDTO.getToUser());
        newmessage.setMessage(msgDTO.getText());
        newmessage.setDate(Instant.now());
        messageRepository.save(newmessage);
    }

    public List<getmessageDTO> getMessages(conversationDTO conversation){
        User user1 = conversation.getUser1();
        User user2 = conversation.getUser2();
        //ArrayList<Message> messages = new ArrayList<>();
        ArrayList<Message> messages = messageRepository.findConversation(user1.getId(), user2.getId());
        return messages.stream()
                .map(getmessageDTO::fromEntity)
                .collect(Collectors.toList());
        //return messageRepository.findConversation(user1.getId(), user2.getId());
    }
}
