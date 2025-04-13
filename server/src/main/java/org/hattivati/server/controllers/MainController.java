package org.hattivati.server.controllers;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.hattivati.server.ServerApplication;
import org.hattivati.server.dto.*;
import org.hattivati.server.entities.Message;
import org.hattivati.server.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "http://localhost:5173")
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
    ResponseEntity<?> isDataValid(@Valid @RequestBody loginFormDTO userData, HttpServletRequest response){
        return mainService.isUserValid(userData);
    }

    @GetMapping("/auth/check")
    public ResponseEntity<?> checkAuth(HttpServletRequest request) {
        if (request.getSession(false) != null && request.getUserPrincipal() != null) {
            return ResponseEntity.ok("Logged in");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Not logged in");
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

    @PostMapping("/languagestolearn")
    public void postLanguagesToLearn (@RequestBody languagesToLearnDTO dto)
    {
        mainService.postLanguagesToLearn(dto);
    }
}
