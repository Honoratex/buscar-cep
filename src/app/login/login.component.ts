import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account/shared/account.service';
import { BuscarCepService } from 'src/app/buscar-cep.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: string;
  public senha: string;

  public result: any;

  constructor(private accountservice: AccountService, private router: Router, private BuscarCepService: BuscarCepService) { }

  ngOnInit() {
  }

  loginAPI() {

    // this.loading = true;

    var usuarioAng = (<HTMLInputElement><unknown>document.getElementById("usuarioAng")).value;

    this.usuario = usuarioAng;

    var senhaAng = (<HTMLInputElement><unknown>document.getElementById("senhaAng")).value;

    this.senha = senhaAng;

    this.logar();

    setTimeout(() => {
      if (this.result == "true") {

        console.log(this.result)
        this.onSubmit()

      } else {
        console.log(this.result)
      }
    }, 600);

    // this.cep = new this.cep;

    //  console.log(this.result)

  }

  async onSubmit() {
    try {
      const result = await this.accountservice.login(this.usuario);
      console.log(`Login efetuado: ${result}`)

      this.router.navigate(['']);

    } catch (error) {
      console.error(error);
    }
  }


  logar() {
    this.BuscarCepService.logar(this.usuario, this.senha).forEach(dados => this.result = dados)
  }

}
