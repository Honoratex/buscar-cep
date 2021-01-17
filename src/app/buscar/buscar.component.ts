import { Component, OnInit } from '@angular/core';

import { BuscarCepService } from 'src/app/buscar-cep.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public cep: any ;

  public loading = false;

  constructor(private BuscarCepService: BuscarCepService) { }

  ngOnInit() {
  }

  public cepvalor: any;

  buscarCep() {
    
    this.loading = true;

    var ceps = (<HTMLInputElement><unknown>document.getElementById("cep")).value;

    this.cepvalor = ceps;

    this.listar()

    setTimeout(() => {
      this.loading = false;
    }, 600);
    
    // this.cep = new this.cep;

    console.log(this.cep)
  }


  limpar() {
    this.cep = "";
  }

  listar() {
    this.BuscarCepService.listar(this.cepvalor).forEach(dados => this.cep = dados )
  }

}
