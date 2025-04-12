package org.hattivati.server.controllers;

import jakarta.validation.Valid;
import org.hattivati.server.ServerApplication;
import org.hattivati.server.dto.loginFormDTO;
import org.hattivati.server.dto.usermessageDTO;
import org.hattivati.server.service.MainService;
import org.hattivati.server.dto.registrationFormDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

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
    boolean isDataValid(@Valid @RequestBody loginFormDTO userData){
        return mainService.isUserValid(userData);
    }

    @PostMapping("/register/form")
    public void registerUser(@RequestBody registrationFormDTO userDTO) {
        mainService.createUser(userDTO);
    }

    @PostMapping("/sendmessage")
    public void sendMessage(@RequestBody usermessageDTO msgDTO) {
        System.out.println(msgDTO);
        mainService.sendMessage(msgDTO);
    }
}
