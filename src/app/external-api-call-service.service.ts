import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExternalApiCallServiceService {

  constructor(private http:HttpClient) { 

  }

  getCovidData(){
    return this.http.get("https://api.covid19api.com/country/south-africa?from=2020-03-01T00:00:00Z&to=2020-12-01T00:00:00Z");
  }
}
