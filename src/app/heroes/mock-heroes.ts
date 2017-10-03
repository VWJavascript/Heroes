// Mock é uma simulação ultra-rapida e sem erros de um web-service
// na qual disponibiliza dados para os serviços
import {Hero} from './hero';

// Cria um vetor de 10 herois
// A constante de herois esta sendo exportada, logo qualquer um pode importa-la.
export const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice'},
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

