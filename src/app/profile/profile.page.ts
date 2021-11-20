import { Component, OnInit } from '@angular/core';
import { ToastController  } from '@ionic/angular';
import { NavigationExtras,Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import {Profile} from '../profile';
import {StorageserviceService} from '../storageservice.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
 profiles: Profile[];
 public slideOpts = {
  slidesPerView: 1.3,
  spaceBetween: 1,
  centeredSlides:false,
  intialSlide:2,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  }};
  constructor( private toastController : ToastController,
    private router : Router, private storage: Storage,private storageService:StorageserviceService ) {

 
 
    this.profiles = [
     {
       name : "Priya",
       image: "0",
       intrest: false,
       content: "Age : 23 , Gender : Female, Education: MCA"
     },
     {       
      name : "Joythi",
     image: "1",
     intrest: false,
     content: "Age : 23 , Gender : Female, Education: MS"
    },
    {       
     name : "Jully",
    image: "2",
    intrest: false,
    content: "Age : 23 , Gender : Female, Education: MSc."
   },
   {       
    name : "Longon",
   image: "3",
   intrest: false,
   content: "Age : 23 , Gender : Female, Education: PG"
  },
  {       
   name : "Stella",
  image: "4",
  intrest: false,
  content: "Age : 23 , Gender : Female, Education: PG"
 },
 {       
  name : "Guna",
 image: "5",
 intrest: false,
 content: "Age : 23 , Gender : Female, Education: MBBS"
}
   ];
  };

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    // await this.storage.create();

    // this.storage.set('profiles', this.profiles);
    // const result =   this.storage.get('test-key');
    // console.log('result = ' + result);
    setTimeout(()=>{
     this.storageService.set('profile',this.profiles);
  
    },5000);
    console.log(
      await this.storageService.get('profile'));
  }

  

  onClickNavToDetails(p){
    const navigationExtras: NavigationExtras = {
      queryParams: {
         profile : JSON.stringify(p),
      }
    };

    this.router.navigate(['profiledetails'],navigationExtras);
  }


  

  onClickNavToGesture(){
     this.router.navigate(['swipeprofiles']);
  }

  

  
}

// interface profile{
//   name: any;
//     image: any;
//   intrest: any;
//   content: any;
// }