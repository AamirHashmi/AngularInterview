import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css'],
})
export class ImageViewComponent implements OnInit {
  @Input() private imgUrl: string;
  @Input() private title: string;
  @Input() private description: string;
  constructor(private router: Router) {}

  public getTitle(): string {
    return this.title;
  }

  public getDescription(): string {
    return this.description;
  }

  public getImgUrl(): string {
    return this.imgUrl;
  }

  public navigateToStorePage() {
    this.router.navigate(['/store']);
  }

  ngOnInit(): void {}
}
