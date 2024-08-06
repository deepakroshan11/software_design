package com.example.emptax.service;

import com.example.emptax.model.Allowance;
import com.example.emptax.model.AllowanceDetails;
import com.example.emptax.model.Company;
import com.example.emptax.model.Deduction;
import com.example.emptax.model.DeductionDetails;
import com.example.emptax.model.Employee;
import com.example.emptax.repository.AllowanceDetailsRepository;
import com.example.emptax.repository.AllowanceRepository;
import com.example.emptax.repository.CompanyRepository;
import com.example.emptax.repository.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AllowanceDetailsService{

    @Autowired
    private AllowanceDetailsRepository allowanceDetailsRepository;

    @Autowired
    private AllowanceRepository allowanceRepository;
    @Autowired
    private EmployeeRepository employeeRepository;
    @Autowired
    private CompanyRepository companyRepository;

       public AllowanceDetails saveAllowanceDetails(AllowanceDetails dd) {
        Long id = dd.getAllowance_id();
        Optional<Allowance> aa=allowanceRepository.findById(id);
        if (aa.isPresent()) {
            Allowance act = aa.get();
            Double amount = dd.getActualAmount() - act.getAmount();
            dd.setCalculatedAmount(amount);
        }
        return allowanceDetailsRepository.save(dd);
    }

    
    public List<AllowanceDetails> getallallowancedetails()
    {
        return allowanceDetailsRepository.findAll();
    }
    public List<AllowanceDetails> getAllowanceDetailsByEmployeeId(Long EmployeeId)
    {
        return allowanceDetailsRepository.findByEmployeeId(EmployeeId);
    }

    public List<AllowanceDetails> getAllowanceDetailsByCompanyId(Long companyId) {
        return allowanceDetailsRepository.findByCompanyId(companyId);
    }
    public void deletebyAll()
    {
         allowanceDetailsRepository.deleteAll();
    }
}
