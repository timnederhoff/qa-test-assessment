import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
})
export class PlanetComponent {
  @Input() planet;
}
