import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profiledetails',
  templateUrl: './profiledetails.page.html',
  styleUrls: ['./profiledetails.page.scss'],
})
export class ProfiledetailsPage implements OnInit {
private name:any;
private content:any;
private interested:any; 
paramResponse:any;
  constructor(private route:ActivatedRoute) {

    this.route.queryParams.subscribe(params=>{
      if(params && params.profile){
          this.paramResponse=JSON.parse(params.profile);
          console.log(this.paramResponse);
      }
    });
   }

  ngOnInit() {
  }
  counter(i : number){
    return new Array(i);
  }


}
