import { ApiService } from './../providers/api.service';
import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page implements OnInit {

  email: string = "";
  senha: string = "";

  constructor(
    public menuCtrl: MenuController, 
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private apiService: ApiService,
    private storage: Storage,
    ) {
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

  login(){
    const spinner = document.getElementById('spinner3');
    const login = document.getElementById('login');

    if(this.email == ""){
      this.presentToast('E-mail obrigatório!');
    }
    else if(this.senha == ""){
      this.presentToast('Senha obrigatória!');
    }
    else{

      login.classList.remove("block");
      login.classList.add("hidden");
  
      spinner.classList.remove("hidden");
      spinner.classList.add("block");

      return new Promise(resolve => {
        let body = {
          aksi: 'login',
          email: this.email,
          senha: this.senha
        }

        this.apiService.postData(body, 'api2.php').subscribe((res:any)=>{
          if(res.success == true){

            spinner.classList.remove("block");
            spinner.classList.add("hidden");
        
            login.classList.remove("hidden");
            login.classList.add("block");

            this.storage.set('storage_xxx', res.result); //CRIA A SESSÃO
            this.navCtrl.navigateRoot(['/home']);
            this.presentToast('Bem-Vindo!'); 
          }
          else{
            spinner.classList.remove("block");
            spinner.classList.add("hidden");
        
            login.classList.remove("hidden");
            login.classList.add("block");

            this.presentToast(res.msg);
          }
        }, (err)=>{
            spinner.classList.remove("block");
            spinner.classList.add("hidden");
        
            login.classList.remove("hidden");
            login.classList.add("block");

            this.navCtrl.navigateRoot(['/home']);
            this.presentToast('Bem-Vindo!');
        });

      });

    }

  }

  async presentToast(a){
    const toast = await this.toastCtrl.create({
      message: a,
      duration: 1500,
      position: 'top',
      cssClass:'toast-bg'
    });
    toast.present();
  }

}
