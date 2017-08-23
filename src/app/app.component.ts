import { Component } from '@angular/core';

// Model hero
export class Hero {
  id: number;
  name: string;
}

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

  // Object hero of type Hero
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
}


