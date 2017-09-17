import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {

  // O decorator @Input() declara que a propriedade hero como um input, ou seja, pode ser passado através do selector através de []
  // Isso sera importado por outros componentes que usará esse componente
  // O que isso faz é receber um objeto heroi através do selector <hero-detail> utilizado por outro componente.
  // Através de outro componente o que estiver após o = será armazenado na variável hero que será utilizado no componente HeroDetailComponent
  // <hero-detail [hero]="..."></hero-detail>
  @Input() hero: Hero;

}
