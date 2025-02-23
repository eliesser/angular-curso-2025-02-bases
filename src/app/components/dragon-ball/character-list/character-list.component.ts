import { Component, input } from '@angular/core';
import { ICharacter } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragon-ball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  listName = input.required<string>();
  characters = input.required<ICharacter[]>();
}
