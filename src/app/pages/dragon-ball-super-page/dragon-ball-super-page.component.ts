import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragon-ball/character-list/character-list.component';
import { ICharacter } from '../../interfaces/character.interface';
import { CharacterAddComponent } from '../../components/dragon-ball/character-add/character-add.component';

@Component({
  selector: 'app-dragon-ball-super-page',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragon-ball-super-page.component.html',
})
export class DragonBallSuperPageComponent {
  name = signal<string>('');
  power = signal<number>(0);
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
