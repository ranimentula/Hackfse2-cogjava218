package com.cognizant.stockservice.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.stockservice.model.Stock;

@Repository
public interface StockRepository_JPA extends JpaRepository<Stock, Integer>{
	
	@Query
	List<Stock> findBycompanyCode(int companyCode);

	@Query
	List<Stock> findAllByDateBetween(LocalDate date1, LocalDate date2);

	@Query
	List<Stock> findBycompanyCodeAndDateBetween(int companyCode, LocalDate date1, LocalDate date2);

	@Query
	List<Stock> findBycompanyCodeOrderByDateAsc(int companyCode);

	@Transactional
	@Query
	void deleteAllBycompanyCode(int companyCode);

}
