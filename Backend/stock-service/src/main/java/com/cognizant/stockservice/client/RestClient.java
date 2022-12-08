package com.cognizant.stockservice.client;

import java.net.URI;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.cognizant.stockservice.VO.Company;



//@FeignClient(value="company-client", url="http://hackfse2apigateway-env.eba-mpsgx5wq.us-west-2.elasticbeanstalk.com/company/")
@FeignClient(value="company-client", url="http://companyservice-env.eba-kaw9jyrf.us-west-2.elasticbeanstalk.com/company/")
//@FeignClient(value="company-client", url="http://localhost:8093/company/")
public interface RestClient {
	
	@GetMapping("/info/{companyCode}")
	 Company getCompany(URI baseUrl, @PathVariable int companyCode);
		
	}
		
