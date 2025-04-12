package org.hattivati.server.controllers;

import jakarta.validation.Valid;
import org.hattivati.server.ServerApplication;
import org.hattivati.server.dto.*;
import org.hattivati.server.entities.Message;
import org.hattivati.server.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
@RestController
@RequestMapping("api/v1/")
public class MainController {

    @Autowired
    private MainService mainService;

    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);
    }
    @CrossOrigin
    @GetMapping("/home")
    public String helloWorld(){
        return "Hello from server at " + new java.util.Date();
    }

    @PostMapping("/login/form")
    ResponseEntity isDataValid(@Valid @RequestBody loginFormDTO userData){
        return mainService.isUserValid(userData);
    }

    @PostMapping("/register/form")
    public ResponseEntity registerUser(@RequestBody registrationFormDTO userDTO) {
        return mainService.createUser(userDTO);
    }

    @PostMapping("/sendmessage")
    public void sendMessage(@RequestBody sendmessageDTO msgDTO) {
        System.out.println(msgDTO);
        mainService.sendMessage(msgDTO);
    }

    @GetMapping("/messages")
    public List<getmessageDTO> getMessages (@RequestBody conversationDTO conversation) {
        return mainService.getMessages(conversation);
    }
}
