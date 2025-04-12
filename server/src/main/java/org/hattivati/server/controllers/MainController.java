package org.hattivati.server.controllers;

import jakarta.validation.Valid;
import org.hattivati.server.ServerApplication;
import org.hattivati.server.dto.loginFormDTO;
import org.hattivati.server.service.MainService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
@RequestMapping("api/v1/")
public class MainController {

    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);
    }
    @CrossOrigin
    @GetMapping("/home")
    public String helloWorld(){
        return "Hello from server at " + new java.util.Date();
    }

    @PutMapping("/login/form")
    boolean isDataValid(@Valid @RequestBody loginFormDTO userData){
        return MainService.isUserValid(userData);
    }
}
