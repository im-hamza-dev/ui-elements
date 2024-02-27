import { Component } from '@angular/core';
import { TeamMember } from '../../models/TeamMember';
import { CustomCardComponent } from '../custom-card/custom-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cards-wrapper',
  standalone: true,
  imports: [CustomCardComponent, NgFor],
  templateUrl: './cards-wrapper.component.html',
  styleUrl: './cards-wrapper.component.scss',
})
export class CardsWrapperComponent {
  teamMembers: TeamMember[] | [];
  constructor() {
    this.teamMembers = [
      {
        name: 'Hamza',
        title: 'Senior Frontend Developer',
        desc: 'Lorem Ipsum',
        picture: null,
        github: 'https://github.com/im-hamza-dev',
      },
      {
        name: 'Jack',
        title: 'Senior Backend Developer',
        desc: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
        picture: null,
        github: 'https://github.com/im-hamza-dev',
      },
    ];
  }
}
