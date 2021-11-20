import { Component, OnInit,  ElementRef, QueryList, ViewChildren, AfterViewInit, } from '@angular/core';
import { SwipergestureService} from '../../app/swipergesture.service'; 
import { ToastController, IonCard } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import {Profile} from '../profile';
import {StorageserviceService} from '../storageservice.service';
@Component({
  selector: 'app-swipeprofiles',
  templateUrl: './swipeprofiles.page.html',
  styleUrls: ['./swipeprofiles.page.scss'],
})
export class SwipeprofilesPage implements OnInit  {

  profiles: Profile[]=[];
  
  @ViewChildren(IonCard, { read: ElementRef }) cards: QueryList<ElementRef>;

  constructor(private swperservice:SwipergestureService,
    private storage: Storage,
    private storageService:StorageserviceService, 
    private toastController: ToastController) {
      
     }

   ngOnInit() {
     
      //this.profiles.push(this.storage.get('profiles')); 
       
    }

    ionViewDidEnter(){
      console.log('didEnter');
      const response = this.storageService.get('profile');
      response.then( (val) => {
        this.profiles = val;
      });

      setTimeout(() => {
        console.log("ngAfterViewInit");
        const cardArray = this.cards.toArray();
        this.swperservice.useSwiperGesture(cardArray);
  
        console.log('result = '+ cardArray);
      },1200);
    }
   
  async presentToast(p) {
    
    this.profiles.splice( this.profiles.findIndex(item => item.image === p.image),1)

    const toast = await this.toastController.create({
      message: 'Intrested.',
      duration: 2000
    });
    toast.present();
  }
    // console.log("people
    // getValue(key: string) {
    //   this.storage.get(key).then((val) => {
    //     console.log('get ' + key + ' ', val);
    //     this.data[key] = "";
    //     this.data[key] = val;
    //   }).catch((error) => {
    //     console.log('get error for ' + key + '', error);
    //   });
    // }
  

  // ngAfterViewInit() {
  //   console.log("ngAfterViewInit");
  //   const cardArray = this.cards.toArray();
  //   this.swperservice.useSwiperGesture(cardArray);
  // }

}

