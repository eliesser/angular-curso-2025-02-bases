import { Component, computed, signal } from '@angular/core';

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
  name = signal<string>('');
  power = signal<number>(0);
  characters = signal<ICharacter[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001,
    },
  ]);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) return;

    const newCharacter: ICharacter = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((prev) => [...prev, newCharacter]);

    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
