import { Component, OnInit } from '@angular/core';
import { Hero } from "src/app/hero";

@Component({
  // metadata properties:

  //The component's CSS element selector. Matches the name of the HTML element that identifies this component within a parent component's template
  selector: 'my-app',

  // The location of the component's template file.
  templateUrl: './app.component.html',

  // The location of the component's private CSS styles.
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = 'titolo';

  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
}
