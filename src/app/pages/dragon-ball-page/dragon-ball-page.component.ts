import { Component, signal } from '@angular/core';

interface ICharacter {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragon-ball-page',
  imports: [],
  templateUrl: './dragon-ball-page.component.html',
})
export class DragonBallPageComponent {
  characters = signal<ICharacter[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001,
    },
    {
      id: 1,
      name: 'Vegeta',
      power: 8000,
    },
    {
      id: 1,
      name: 'Piccoplo',
      power: 3000,
    },
  ]);
}
