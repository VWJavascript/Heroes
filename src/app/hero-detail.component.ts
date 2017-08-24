import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent {

  // Declare that hero is an input property by preceding it with the @Input decorator
  // This will be imported by anothers component that use this component
  // All it does is receive a hero object through its hero input property and then bind to that property with its template.
  // <hero-detail [hero]="..."></hero-detail>
  @Input() hero: Hero;

}
