import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit {
  private name: string;
  private description: string;
  private price: number;
  private imgUrl: string;

  constructor(private route: ActivatedRoute) {}

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public getPrice(): number {
    return this.price;
  }

  public getImgUrl(): string {
    return this.imgUrl;
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name');
    this.description = this.route.snapshot.paramMap.get('description');
    this.price = parseInt(this.route.snapshot.paramMap.get('price'));
    this.imgUrl = this.route.snapshot.paramMap.get('imgUrl');
  }
}
