package com.example.demo.repository;

import java.sql.Date;
import java.sql.Time;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Hmodel;

import jakarta.transaction.Transactional;



@Repository
public interface Repo extends JpaRepository<Hmodel,Integer>{
         @Modifying
         @Query(value= "insert into mede(Name,Email,PhoneNumber,AppointmentDate,AppointmentTime) values(?,?,?,?,?)",nativeQuery =true)
         @Transactional
         public void save(String Name,String Email,String PhoneNumber,String AppointmentDate,String AppointmentTime);
    
}