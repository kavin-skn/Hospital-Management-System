package com.example.demo.controller;

import com.example.demo.model.ContactMessage;
import com.example.demo.service.ContactMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping("/api/contact")
public class ContactUsController {

    private final ContactMessageService contactMessageService;

    @Autowired
    public ContactUsController(ContactMessageService contactMessageService) {
        this.contactMessageService = contactMessageService;
    }

    @PostMapping
    public ResponseEntity<String> submitContactMessage(@RequestBody ContactMessage contactMessage) {
        ContactMessage savedContactMessage = contactMessageService.saveContactMessage(contactMessage);
        if (savedContactMessage != null) {
            return ResponseEntity.ok("Message submitted successfully!");
        } else {
            return ResponseEntity.badRequest().body("Failed to submit the message.");
        }
    }
}
