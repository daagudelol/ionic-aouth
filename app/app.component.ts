import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';



import { HomePage } from '../pages/home/home';
import { AuthPageComponent } from '../pages/auth-page/auth-page.component';

import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any ;

  constructor(platform: Platform) {
   
    firebase.initializeApp({
      apiKey: "AIzaSyB_0m2gKHpr3se12jWYq87CHgvTdukXxeM",
      authDomain: "globant-auth.firebaseapp.com",
      databaseURL: "https://globant-auth.firebaseio.com",
      projectId: "globant-auth",
      storageBucket: "",
      messagingSenderId: "487227581310",
      appId: "1:487227581310:web:3d68e137e15e8c7c"
    });

     const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.rootPage = AuthPageComponent;
        unsubscribe();
      } else {
        this.rootPage = HomePage;
        unsubscribe();
      }
    });
  }
}
