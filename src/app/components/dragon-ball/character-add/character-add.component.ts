import { Component, signal } from '@angular/core';
import { ICharacter } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragon-ball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  name = signal<string>('');
  power = signal<number>(0);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) return;

    const newCharacter: ICharacter = {
      id: 1000,
      name: this.name(),
      power: this.power(),
    };

    // this.characters.update((prev) => [...prev, newCharacter]);

    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
