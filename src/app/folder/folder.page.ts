import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})


export class FolderPage{

  lista: any = [];

  constructor(public http: HttpClient) {
    this.escreveDados();
  }

  escreveDados(){
    this.http.get("https://jornalkta.000webhostapp.com/JsonLeitura000.php").subscribe(data => {
      this.lista = data;
    } );
  }
}
