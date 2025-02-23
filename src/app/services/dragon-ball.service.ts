import { Injectable, signal } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DragonBallService {
  characters = signal<ICharacter[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001,
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 8000,
    },
  ]);

  addCharacter(newCharacter: ICharacter) {
    this.characters.update((prev) => [...prev, newCharacter]);
  }
}
