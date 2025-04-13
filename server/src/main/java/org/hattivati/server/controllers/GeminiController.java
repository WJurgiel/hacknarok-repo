package org.hattivati.server.controllers;

import org.hattivati.server.dto.geminiDTO;
import org.hattivati.server.dto.sendmessageDTO;
import org.hattivati.server.service.GeminiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api")
public class GeminiController {

    @Autowired
    private GeminiService geminiService;

    @PostMapping("/ask")
    public String sendMessage(@RequestBody String text) {
        return geminiService.askGemini(text);
    }

    @PostMapping("/translate")
    public String translate(@RequestBody geminiDTO dto) {
        return geminiService.askGemini(dto.getText() + " - translate into " + dto.getUserLanguage() + ", and don't say anything else.");
    }

    @PostMapping("/feedback")
    public String feedback(@RequestBody geminiDTO dto) {
        return geminiService.askGemini("'" + dto.getText() + "' - analyze the previous message, and give me feedback only in " + dto.getUserLanguage() + "  on grammar, spelling and punctuation in original language. Limit response to 3 sentences. Use original message to explain what was wrong.");
    }

}