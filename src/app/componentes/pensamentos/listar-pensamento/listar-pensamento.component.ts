import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PensamentoComponent } from '../pensamento/pensamento.component';
import { NgFor, NgIf } from '@angular/common';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [
    RouterModule,
    PensamentoComponent,
    NgFor,
    NgIf],
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void{
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
    }
}

