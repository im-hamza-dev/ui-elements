import { Component, OnInit,  } from '@angular/core';
import { TeamMember } from '../../models/TeamMember';
import { CustomCardComponent } from '../custom-card/custom-card.component';
import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Products } from '../../models/Products';
import { ProductCardComponent } from '../../product-card/product-card.component';

@Component({
  selector: 'app-cards-wrapper',
  standalone: true,
  imports: [CustomCardComponent, ProductCardComponent, NgFor, HttpClientModule],
  templateUrl: './cards-wrapper.component.html',
  styleUrl: './cards-wrapper.component.scss',
})
export class CardsWrapperComponent implements OnInit {
  teamMembers: TeamMember[] | [];
  public productsList:Products[]|[];
  constructor(private http:HttpClient) {
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
  ngOnInit(): void {
      this.fetchMockData()
  }
  public fetchMockData(){
    this.http.get('https://fakestoreapi.com/products').subscribe((res:any)=>{
      console.log(res)
      this.productsList=res
    })
  }
}
