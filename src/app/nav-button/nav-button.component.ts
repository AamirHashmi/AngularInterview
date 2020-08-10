import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.css'],
})
export class NavButtonComponent implements OnInit {
  @Input() btnText: string;
  constructor() {}

  navigate() {
    console.log('navigate ' + this.btnText);
  }
  ngOnInit(): void {}
}
