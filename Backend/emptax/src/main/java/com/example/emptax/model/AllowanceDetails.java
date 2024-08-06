package com.example.emptax.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class AllowanceDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long allowanceDetailsId;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee employee_id;

    private Long company_id;

    @Column(nullable = false)
    private Long allowance_id;

    private double actualAmount;
    private double calculatedAmount;
}
