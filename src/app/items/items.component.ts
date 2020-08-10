import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  @Input() private name: string;
  @Input() private description: string;
  @Input() private imgUrl: string;
  @Input() private price: number;

  constructor() {}

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public getImgUrl(): string {
    return this.imgUrl;
  }

  public getPrice(): number {
    return this.price;
  }

  ngOnInit() {}
}
