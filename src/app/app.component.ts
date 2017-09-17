import { Component, OnInit } from '@angular/core';
import { Hero } from './hero'
import { HeroService } from './hero.service';

// É a diretiva que define um componente
@Component({
  // É a tag HTML que será inserido o componente <app-root>
  selector: 'app-root',
  // Template html que terá o componente
  // Você pode ter um template nesse arquivo através da
  // variavel template: `<p>...</p>`
  templateUrl: './app.component.html',
  // CSS do componente
  styleUrls: ['./app.component.css'],
  // Ensina ao injetor como criar um HeroService
  // O array providers diz ao angular para criar uma instancia
  // do HeroService quando for criado o AppComponent
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  // Atributo titulo que irá para o template
  title = 'Tour of Heroes';
  // Atributo selectedHero do tipo Hero que pode ser usado no template
  selectedHero: Hero;
  // Lista de herois do tipo Hero[]
  heroes: Hero[];

  // Quando o componente é criado/construido tem que ser injetado
  // um heroService do tipo HeroService
  // Agora angular sabe como fornecer uma instância de HeroService
  // quando for criado um AppComponent.
  constructor(private heroService: HeroService) { }

  // Pega os herois definidos em heroService como uma promise
  // através do then podemos pegar os dados da promise assim que
  // ela for disponibilizada
  // Arrow functions: (parametro1, parametro2, ...) => {codigo}
  getHeroes(): void {
    this.heroService.getHeroes().then(
      heroes => {this.heroes = heroes}
    );
  }

  // Angular oferece interfaces para explorar momentos críticos no ciclo de
  // vida do componente: na criação (onInit), após cada mudança ()
  // e na sua eventual destruição ().
  // No caso usamos o ngOnInit para pegar os herois ao criar o componente
  ngOnInit(): void {
    this.getHeroes();
  }

  // Adiciona um método que armazena no selectedHero o hero selecionado
  // pelo usuário com um click
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}


