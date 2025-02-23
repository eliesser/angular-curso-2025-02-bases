import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragon-ball/character-list/character-list.component';
import { ICharacter } from '../../interfaces/character.interface';
import { CharacterAddComponent } from '../../components/dragon-ball/character-add/character-add.component';
import { DragonBallService } from '../../services/dragon-ball.service';

@Component({
  selector: 'app-dragon-ball-super-page',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragon-ball-super-page.component.html',
})
export class DragonBallSuperPageComponent {
  dragonBallService = inject(DragonBallService);
}
