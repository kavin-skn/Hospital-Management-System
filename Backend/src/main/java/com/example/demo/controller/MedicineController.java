package com.example.demo.controller;

import com.example.demo.model.Medicine;
import com.example.demo.service.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/medicine")
public class MedicineController {

    private final MedicineService medicineService;

    @Autowired
    public MedicineController(MedicineService medicineService) {
        this.medicineService = medicineService;
    }

    @GetMapping("/{name}")
    public ResponseEntity<Medicine> getMedicineByName(@PathVariable String name) {
        // Implement the logic to fetch medicine details by name from the database if needed
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/buy")
    public ResponseEntity<String> buyMedicine(@RequestBody Medicine medicine) {
        // You can perform any additional logic for order processing, payment, etc. here.
        // For this example, let's just calculate the total amount and save the order details to the database.

        Medicine savedMedicine = medicineService.saveMedicine(medicine);

        if (savedMedicine != null) {
            return ResponseEntity.ok("Order placed successfully!");
        } else {
            return ResponseEntity.badRequest().body("Failed to place the order.");
        }
    }
}
