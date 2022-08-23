import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  nome: string = '';
  email: string = '';
  telefone: string = '';
  senha: string = '';
  codigo: string = '';

  constructor(
    public menuCtrl: MenuController, 
    public navCtrl: NavController
    ) {
    this.menuCtrl.enable(false);
  }



  ngOnInit() {
  }

  voltar() {
    this.navCtrl.back();
  }

  cadastrar(){
    const spinner = document.getElementById('spinner3');
    const cadastrar = document.getElementById('cadastrar');

    cadastrar.classList.remove("block");
    cadastrar.classList.add("hidden");

    spinner.classList.remove("hidden");
    spinner.classList.add("block");

  }

}
