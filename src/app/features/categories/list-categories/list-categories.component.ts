import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.scss',
})
export class ListCategoriesComponent implements OnInit {
  public categoriesList: string[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get('https://fakestoreapi.com/products/categories')
      .subscribe((res: any) => {
        console.log(res);
        this.categoriesList = res;
      });
  }
}
