package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "medicine_order")
public class Medicine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "medicine_name")
    private String medicineName;

    private int quantity;

    @Column(name = "billing_address")
    private String billingAddress;

    @Column(name = "total_amount")
    private double totalAmount;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMedicineName() {
		return medicineName;
	}

	public void setMedicineName(String medicineName) {
		this.medicineName = medicineName;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getBillingAddress() {
		return billingAddress;
	}

	public void setBillingAddress(String billingAddress) {
		this.billingAddress = billingAddress;
	}

	public double getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(double totalAmount) {
		this.totalAmount = totalAmount;
	}

	public Medicine(Long id, String medicineName, int quantity, String billingAddress, double totalAmount) {
		super();
		this.id = id;
		this.medicineName = medicineName;
		this.quantity = quantity;
		this.billingAddress = billingAddress;
		this.totalAmount = totalAmount;
	}

	public Medicine() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getPricePerUnit() {
		// TODO Auto-generated method stub
		return 0;
	}

    
}
