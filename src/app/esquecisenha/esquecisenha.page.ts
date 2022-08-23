import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-esquecisenha',
  templateUrl: './esquecisenha.page.html',
  styleUrls: ['./esquecisenha.page.scss'],
})
export class EsquecisenhaPage implements OnInit {

  constructor(public menuCtrl: MenuController, public navCtrl: NavController) {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
  }

  voltar() {
    this.navCtrl.back();
  }

  esqueci(){
    this.navCtrl.navigateRoot('/esquecisenha');
  }

  recuperar(){
    const spinner = document.getElementById('spinner3');
    const recuperar = document.getElementById('recuperar');

    recuperar.classList.remove("block");
    recuperar.classList.add("hidden");

    spinner.classList.remove("hidden");
    spinner.classList.add("block");
  }

}
