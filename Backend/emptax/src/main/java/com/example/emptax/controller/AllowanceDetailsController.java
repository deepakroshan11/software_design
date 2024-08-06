package com.example.emptax.controller;

import com.example.emptax.model.AllowanceDetails;
import com.example.emptax.service.AllowanceDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/allowance-details")
public class AllowanceDetailsController {

    @Autowired
    private AllowanceDetailsService allowanceDetailsService;

    @PostMapping
    public ResponseEntity<AllowanceDetails> createAllowanceDetails(@RequestBody AllowanceDetails allowanceDetails) {
        AllowanceDetails savedAllowanceDetails = allowanceDetailsService.saveAllowanceDetails(allowanceDetails);
        return ResponseEntity.ok(savedAllowanceDetails);
    }

    @GetMapping
    public ResponseEntity<List<AllowanceDetails>> getAllAllowanceDetails() {
        List<AllowanceDetails> allowanceDetails = allowanceDetailsService.getallallowancedetails();
        return ResponseEntity.ok(allowanceDetails);
    }

    @GetMapping("/employee/{employeeId}")
    public ResponseEntity<List<AllowanceDetails>> getAllowanceDetailsByEmployeeId(@PathVariable Long employeeId) {
        List<AllowanceDetails> allowanceDetails = allowanceDetailsService.getAllowanceDetailsByEmployeeId(employeeId);
        return ResponseEntity.ok(allowanceDetails);
    }

    @GetMapping("/company/{companyId}")
    public ResponseEntity<List<AllowanceDetails>> getAllowanceDetailsByCompanyId(@PathVariable Long companyId) {
        List<AllowanceDetails> allowanceDetails = allowanceDetailsService.getAllowanceDetailsByCompanyId(companyId);
        return ResponseEntity.ok(allowanceDetails);
    }
    @DeleteMapping
    public void deleteall()
    {
        allowanceDetailsService.deletebyAll();
    }
}
