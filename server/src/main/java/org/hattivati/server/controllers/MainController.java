package org.hattivati.server.controllers;

import org.hattivati.server.ServerApplication;
import org.hattivati.server.dto.registrationFormDTO;
import org.hattivati.server.service.MainService;
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

    @PostMapping("/register/form")
    public User registerUser(@RequestBody registrationFormDTO userDTO) {
        return mainService.createUser(userDTO);
    }
}
