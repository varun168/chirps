import 'bootstrap';
import { inject } from 'aurelia-framework';
import AuthService from 'AuthService';
import {Chirp} from './chirp';

@inject(AuthService)
export class App {

  constructor(AuthService) {
  	this.auth = AuthService;
    this.heading = "Chirps App";
    this.chirps = [];
    this.chirpDescription = '';  
    this.chirpComment = '';
    this.currentDate = new Date();
    
      

    
  }
    
    addChirp() {
    if (this.chirpDescription) {
      this.chirps.push(new Chirp(this.chirpDescription));
      this.chirpDescription = '';
    }
        
    
    
  }
    
    postChirp(){

        alert("Hello");
    
    }  
}

export class ToJSONValueConverter {
  toView(obj) {
    if (obj) {
      return JSON.stringify(obj, null, 2)
    }
  }
}