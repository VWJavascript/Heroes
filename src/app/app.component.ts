import { Component } from '@angular/core';
import { Hero } from './hero'

// Create a array of ten heroes
const HEROES: Hero[] = [
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

// Directive to define a component
@Component({
  // Selector of component to insert on HTML <app-root>
  selector: 'app-root',
  // Template path to this component
  templateUrl: './app.component.html',
  // template `<p>Insert multi-line template</p>`
  // CSS path to this component
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Attribute title
  title = 'Tour of Heroes';

  // Selected hero property
  selectedHero: Hero;

  // Create a array of heroes
  heroes = HEROES;

  // Add an method that sets the selectedHero property to the hero that the user clicks
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}


