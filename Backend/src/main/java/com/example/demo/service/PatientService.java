// PatientService.java
package com.example.demo.service;

import com.example.demo.model.Patient;
import com.example.demo.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientService {
    private final PatientRepository patientRepository;

    @Autowired
    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    public Patient addPatient(String firstName, String lastName, int age, String details) {
        Patient newPatient = new Patient();
        newPatient.setFirstName(firstName);
        newPatient.setLastName(lastName);
        newPatient.setAge(age);
        newPatient.setDetails(details);
        return patientRepository.save(newPatient);
    }

    
}
