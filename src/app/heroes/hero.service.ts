// Serviço que provê os dados e compartilha com todos os componentes que utilizarem desse serviço.
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
// Importa a capacidade de transformar Observables em Promises
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero.model';

// Cria e exporta o serviço para que outros componentes possam importar.
// O decorator @Injectable() diz ao typescript para emitir metadados sobre o serviço.
// Esses metadados especifica que o angular deve injetar outras dependencias nesse serviço.
@Injectable()
export class HeroService {

  // Url para web API
  private heroesUrl = 'api/heroes';
  // Cria um cabeçalho para a requisição post e put
  private headers = new Headers({'Content-Type': 'application/json'});

  // Injetar o HTTP service dentro HeroService
  constructor(private http: Http) {}

  // Função que pega os dados dos herois de um web service ou local storage ou um mock
  // Quando pegamos dados de um web service, não podemos ficar esperando o servidor responder
  // logo usamos promise para sincronizar os dados com a resposta do servidor.
  // A Promise essencialmente promete retornar quando os resultados estão prontos ou um erro.
  getHeroes(): Promise<Hero[]> {
    // O http.get retorna um RxJS Observable, que é um meio poderoso de gerenciar fluxo de dados assincronos
    return this.http
      .get(this.heroesUrl)
      // Conver um Observable para um Promise usando o operador toPromisse
      // Um Observável é um fluxo de eventos que você pode processar com operadores semelhantes a matriz.
      .toPromise()
      // Assim que adquire o Promisse, podemos extrair os dados dela (response) em formato JSON
      // Essa API retorna um atributo chamado data com os dados, no caso o array de herois.
      // Com isso podemos transformar a resposta em um Hero[]
      .then(response => {
        return response.json().data as Hero[]
      })
      // Caso de algum erro você captura esses erros e retorna para o cliente
      .catch(this.handleError);
  }

  // Pega todos os herois através do getHeroes e procurar por um hero especifico através do ID passado
  getHero(id: number): Promise<Hero> {
    // Cria a url
    const url = `${this.heroesUrl}/${id}`;
    // Retorna o heroi especificado pelo id da url
    return this.http
      .get(url)
      .toPromise()
      .then(response => {
        return response.json().data as Hero;
      })
      .catch(this.handleError);
  }

  // Pega o heroi especifico pela url e atualiza seus dados
  update(hero: Hero): Promise<Hero> {
    // Cria a url
    const url = `${this.heroesUrl}/${hero.id}`;
    // Retorna o novo heroi editado
    return this.http
      // Transforma o objeto hero em um JSON e insere os cabeçalhos de requisição
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  // Adiciona um novo heroi no servidor
  create(name: string): Promise<Hero> {
    return this.http
      // Transforma o novo objeto hero em um JSON e insere os cabeçalhos de requisição
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(response => {
        return response.json().data as Hero;
      })
      .catch(this.handleError);
  }

  // Deletar um heroi
  delete(id: number): Promise<void> {
    // Url do heroi selecionado
    const url = `${this.heroesUrl}/${id}`;
    // Deletar o heroi
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    // Nesse caso iremos só exibir o erro no console, mas você deve trata-lo
    console.error('An error occurred', error);
    // O código também inclui um erro para o chamador em uma promessa rejeitada, para que o chamador possa
    // exibir uma mensagem de erro apropriada para o usuário.
    return Promise.reject(error.message || error);
  }
}
