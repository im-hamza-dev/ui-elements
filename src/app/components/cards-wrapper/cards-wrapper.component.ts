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
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        picture: null,
        github: 'https://github.com/im-hamza-dev',
      },
      {
        name: 'Jack',
        title: 'Senior Backend Developer',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        picture: null,
        github: 'https://github.com/im-hamza-dev',
      },
      {
        name: 'Dev3',
        title: 'Junior MERN Developer',
        desc: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        picture: null,
        github: 'https://github.com/im-hamza-dev',
      },
      {
        name: 'Dev4',
        title: 'DevOps Engineer',
        desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        picture: null,
        github: 'https://github.com/im-hamza-dev',
      },
    ];
  }
}
