package com.example.demo.repository;

import com.example.demo.model.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactMessageRepository extends JpaRepository<ContactMessage, Long> {
    // You can add custom query methods here if needed
}
