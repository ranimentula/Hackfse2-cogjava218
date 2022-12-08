import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

   ROOT_URL : string = "http://apigateway-env.eba-7cm2y2ft.ap-northeast-1.elasticbeanstalk.com/";

  constructor(private http:HttpClient) { }

  public getAllCompany(){
    return this.http.get(this.ROOT_URL+"company-api/company/getall");
  }

  public getStockData(companyCode:string, startDate:string, endDate:string){
    return this.http.get(this.ROOT_URL+"stock-api/stock/get/"+companyCode+"/"+startDate+"/"+endDate);
  }

  public getCompanyData(companyCode:string){
    return this.http.get(this.ROOT_URL+"company-api/company/info/"+companyCode);
  }

}
