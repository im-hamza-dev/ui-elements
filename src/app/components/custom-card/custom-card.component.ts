import { Component, Input, OnInit } from '@angular/core';
import { TeamMember } from '../../models/TeamMember';

@Component({
  selector: 'app-custom-card',
  standalone: true,
  imports: [],
  templateUrl: './custom-card.component.html',
  styleUrl: './custom-card.component.scss',
})
export class CustomCardComponent implements OnInit {
  @Input() teamMember: TeamMember | undefined;
  constructor() {}
  ngOnInit(): void {}
}
