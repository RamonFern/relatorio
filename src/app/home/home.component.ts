import { RelatorioService } from './../service/relatorio.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  relatorioList: any


  constructor(private relatorioService: RelatorioService, private router: Router) { }

  ngOnInit(): void {
    this.relatorioService.listar().subscribe(relatorios => {
      console.log(relatorios)
      this.relatorioList = relatorios
    } )
  }

  excluir = (id: any) => {
    this.relatorioService.excluir(id).subscribe(
      success => console.log("Deletado com sucesso"),
      error => console.log("Não foi possivel deletar. ERRO!"),
      () => console.log('Requisição completa')),
      this.ngOnInit();
  }

  editar = (id: any) => {
    this.router.navigate(['novo', id])
  }
  
}
