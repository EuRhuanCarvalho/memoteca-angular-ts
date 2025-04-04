import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-excluir-pensamento',
  imports: [],
  templateUrl: './excluir-pensamento.component.html',
  styleUrl: './excluir-pensamento.component.css'
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: "",
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID recebido da rota:', id);
    this.service.buscarPorId((id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  excluirPensamento() {
    console.log('Exluir Pensamento esta disparado')
    if(this.pensamento.id){
        this.service.excluir(this.pensamento.id).subscribe(()=>{
          this.router.navigate(['/listarPensamento']);
        })
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
}
