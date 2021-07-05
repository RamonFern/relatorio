import { RelatorioService } from './../service/relatorio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  relatorioList: any


  constructor(private relatorioService: RelatorioService) { }

  ngOnInit(): void {

    this.relatorioService.listar().subscribe(relatorio => {
      console.log(relatorio)
      this.relatorioList = relatorio
    } )
    console.log(this.relatorioList)
  }

  

}
