import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../app/models/user";
import { RegisterPage } from "../register/register";
import { AngularFireAuth } from "angularfire2/auth";
import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(user: User) {
    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      try{
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if(result) {
    this.navCtrl.setRoot(HomePage);
      }   
      
      }
      catch(e){
        console.error(e);
      }

  }

  register() {
    this.navCtrl.push(RegisterPage);

  }


}
