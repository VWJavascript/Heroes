import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Hero } from '../hero.model';

@Component({
  selector: 'hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // O decorator @Input() declara que a propriedade hero como um input, ou seja, pode ser passado através do selector através de []
  // Isso sera importado por outros componentes que usará esse componente
  // O que isso faz é receber um objeto heroi através do selector <hero-detail> utilizado por outro componente.
  // Através de outro componente o que estiver após o = será armazenado na variável hero que será utilizado no componente HeroDetailComponent
  // <hero-detail [hero]="..."></hero-detail>
  // @Input() hero: Hero;
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  // O paramMap irá pegar o parametro :id do ActivatedRoute (rota) e armazenar na variável params para que o heroService busque o heroi desse ID
  // O parametro + irá converter a string ID da rota em um numero que será o ID do heroi
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => {this.hero = hero});
  }

  // Esse método navega para trás um passo na pilha de histórico do navegador usando o serviço de localização que foi injetado Location
  goBack(): void {
    this.location.back();
  }

  // Atualiza o heroi ao edita-lo e volte para a pagina anterior
  save(): void {
    this.heroService.update(this.hero)
        .then(() => this.goBack())
  }
}
