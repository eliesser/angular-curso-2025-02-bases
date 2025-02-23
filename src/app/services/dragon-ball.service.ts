import { effect, Injectable, signal } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';

function loadFromLocalStorage(): ICharacter[] {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
}

@Injectable({
  providedIn: 'root',
})
export class DragonBallService {
  characters = signal<ICharacter[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(newCharacter: ICharacter) {
    this.characters.update((prev) => [...prev, newCharacter]);
  }
}
