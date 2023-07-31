package com.example.demo.service;

import com.example.demo.model.Medicine;
import com.example.demo.repository.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MedicineService {

    private final MedicineRepository medicineRepository;

    @Autowired
    public MedicineService(MedicineRepository medicineRepository) {
        this.medicineRepository = medicineRepository;
    }

    public Medicine saveMedicine1(Medicine medicine) {
        // Calculate the total amount based on the selected medicine's price and quantity
        double totalAmount = medicine.getPricePerUnit() * medicine.getQuantity();
        medicine.setTotalAmount(totalAmount);

        return medicineRepository.save(medicine);
    }

	public Medicine saveMedicine(Medicine medicine) {
		// TODO Auto-generated method stub
		return null;
	}
}
