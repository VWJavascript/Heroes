// Serviço que provê os dados e compartilha com todos os componentes que utilizarem desse serviço.
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// Cria e exporta o serviço para que outros componentes possam importar.
// O decorator @Injectable() diz ao typescript para emitir metadados sobre o serviço.
// Esses metadados especifica que o angular deve injetar outras dependencias nesse serviço.
@Injectable()
export class HeroService {
  // Função que pega os dados dos herois de um web service ou local storage ou um mock
  // Quando pegamos dados de um web service, não podemos ficar esperando o servidor responder
  // logo usamos promise para sincronizar os dados com a resposta do servidor.
  // A Promise essencialmente promete retornar quando os resultados estão prontos ou um erro.
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  // Vamos simular um servidor com 2 segundos de atraso (conexão ruim)
  // Como o getHeroes ele retorna uma promise, porém essa promise demora
  // 2 segundos para retornar os dados
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
}
