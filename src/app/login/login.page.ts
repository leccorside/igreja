import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public menuCtrl: MenuController, public navCtrl: NavController) {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
  }

  login(){
    this.navCtrl.navigateRoot('/login2');
  }

  cadastro(){
    this.navCtrl.navigateRoot('/cadastro');
  }

}
