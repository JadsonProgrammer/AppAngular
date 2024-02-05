import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  url: string = 'http://loiane.com';
  getValor() {
    return 1;
  }
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com.br/400/200';
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  nome!: Event;





  getCurtirCurso() {
    return true;
  }
  botaoClicado() {
    alert('Botão clicado! ');
  }
  onKeyUp(evento: string) {
    this.valorAtual = evento;
  }
  salvarValor(evento: string) {
    this.valorSalvo = evento;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }
}
