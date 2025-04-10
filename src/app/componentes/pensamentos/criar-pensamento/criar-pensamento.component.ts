import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formbuilder.group({
      conteudo: ['',Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      modelo: ['modelo1']
    })
  }

  criarPensamento() {
    console.log(this.formulario.get('autoria')?.errors)
    if(this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }
  }

  cancelarPensamento() {
    this.router.navigate(['/listarPensamento'])
  }

}
