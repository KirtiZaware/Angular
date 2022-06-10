import { Component } from '@angular/core';
import { ExternalApiCallServiceService } from './external-api-call-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covidApiCall';

  constructor(private CallExternalApiService:ExternalApiCallServiceService){

  }

  getCovidDetails:any = [];
  
  ngOnInit(){
    this.CallExternalApiService.getCovidData().subscribe((data)=>{
      this.getCovidDetails = data;
      console.log(this.getCovidDetails);
    })
  }
  
}
