import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { DragonBallPageComponent } from './pages/dragon-ball-page/dragon-ball-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    path: 'dragon-ball',
    component: DragonBallPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
