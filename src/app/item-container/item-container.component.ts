import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { ItemInterface } from '../ItemInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.css'],
})
export class ItemContainerComponent implements OnInit {
  private items: ItemInterface[] = [];
  constructor(private IService: ItemService, private router: Router) {}

  public getItems(): ItemInterface[] {
    return this.items;
  }

  public navigateToDetailPage(item) {
    console.log('cndijsdncicd');
    this.router.navigate([
      '/store',
      item.name,
      item.description,
      item.imgUrl,
      item.price,
    ]);
  }

  ngOnInit() {
    this.IService.getItems().subscribe((data) => (this.items = data));
  }
}
