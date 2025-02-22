import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [UpperCasePipe],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(
    () => `${this.name()} is ${this.age()} years old.`
  );

  upperCaseName = computed(() => new UpperCasePipe().transform(this.name()));

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm() {
    this.name.set('Ironman ');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60);
  }
}
