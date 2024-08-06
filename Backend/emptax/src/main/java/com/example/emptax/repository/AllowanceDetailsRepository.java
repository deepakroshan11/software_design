package com.example.emptax.repository;

import com.example.emptax.model.AllowanceDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AllowanceDetailsRepository extends JpaRepository<AllowanceDetails, Long> {
    @Query("select e from AllowanceDetails e where e.company_id=:companyId")
    List<AllowanceDetails> findByCompanyId(Long companyId);
    @Query("select e from AllowanceDetails e where e.employee_id=:employeeId")
    List<AllowanceDetails> findByEmployeeId(Long employeeId);
}
