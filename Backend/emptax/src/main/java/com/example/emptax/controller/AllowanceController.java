package com.example.emptax.controller;

import com.example.emptax.model.Allowance;
import com.example.emptax.service.AllowanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/allowances")
public class AllowanceController {

    @Autowired
    private AllowanceService allowanceService;

    @PostMapping
    public ResponseEntity<Allowance> createAllowance(@RequestBody Allowance allowance) {
        Allowance savedAllowance = allowanceService.saveAllowance(allowance);
        return ResponseEntity.ok(savedAllowance);
    }

    @GetMapping
    public ResponseEntity<List<Allowance>> getAllAllowances() {
        List<Allowance> allowances = allowanceService.getAllAllowances();
        return ResponseEntity.ok(allowances);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Allowance> getAllowanceById(@PathVariable Long id) {
        Optional<Allowance> allowance = allowanceService.getAllowanceById(id);
        return allowance.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Allowance> updateAllowance(@PathVariable Long id, @RequestBody Allowance allowanceDetails) {
        Allowance updatedAllowance = allowanceService.updateAllowance(id, allowanceDetails);
        if (updatedAllowance != null) {
            return ResponseEntity.ok(updatedAllowance);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAllowance(@PathVariable Long id) {
        allowanceService.deleteAllowanceById(id);
        return ResponseEntity.noContent().build();
    }
}
