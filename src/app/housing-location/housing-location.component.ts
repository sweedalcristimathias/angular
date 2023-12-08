import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
      <h2 class="listing-heading" style="color:#e55d93">{{ housingLocation.name }}</h2>
      <p class="listing-location" style="color:#e66751">{{ housingLocation.city}}, {{housingLocation.state }}</p>
      <a class="hover" style="color:#c80e7b;text-decoration:underline;" [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.scss'],
})

export class HousingLocationComponent {

  @Input() housingLocation!: HousingLocation;

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/