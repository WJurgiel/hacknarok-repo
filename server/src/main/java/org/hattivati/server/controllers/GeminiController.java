package org.hattivati.server.controllers;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/ai")
public class GeminiController {

    private final RestTemplate restTemplate = new RestTemplate();
    private final String apiKey = "AIzaSyB_jB24xsOrOFxPbd09q60sKb2rt4mR3aA";

    @PostMapping("/ask")
    public String askGemini(@RequestBody String userPrompt) {
        String url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + apiKey;

        Map<String, Object> message = Map.of(
                "contents", List.of(
                        Map.of("parts", List.of(
                                Map.of("text", userPrompt)
                        ))
                )
        );

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(message, headers);

        ResponseEntity<Map> response = restTemplate.postForEntity(url, entity, Map.class);

        Map responseBody = response.getBody();
        List<Map> candidates = (List<Map>) responseBody.get("candidates");
        Map firstCandidate = candidates.get(0);
        Map content = (Map) firstCandidate.get("content");
        List<Map> parts = (List<Map>) content.get("parts");

        return (String) parts.get(0).get("text");
    }
}