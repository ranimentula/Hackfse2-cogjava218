import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';  
import { SearchModuleComponent } from './search-module/search-module.component';
import { RestServiceService } from './rest-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-stock-market-frontend';
  constructor(private restService: RestServiceService) { }

  message:string='';
  message2:string='';

  searchData:any;
  startDate:string='';
  endDate:string='';
  companyCode:string='';

  stockDataJson:any;
  stocks:any;
  companyData:any;

  receiveMsg($event:any){
    this.searchData=JSON.parse($event);
    this.startDate=this.searchData['StartDate'];
    this.endDate=this.searchData['EndDate'];
    this.companyCode=this.searchData['company'];
    this.fetchStockData(this.companyCode, this.startDate, this.endDate);
    this.fetchCompanyData(this.companyCode);
    
  
  }
  

  fetchStockData(companyCode:string, startDate:string, endDate:string){
    let response = this.restService.getStockData(companyCode, startDate, endDate);
    response.subscribe((data)=> {
      this.stocks=data;
    });
  }

  fetchCompanyData(companyCode:string){
    let response = this.restService.getCompanyData(companyCode);
    response.subscribe((data)=>{
      this.companyData=data;
    });
  }

}
