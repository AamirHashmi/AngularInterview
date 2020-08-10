import { Component, OnInit } from '@angular/core';
import { NavButtonComponent } from '../nav-button/nav-button.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor() {}
  homeBtnText = 'Home';
  storeBtnText = 'Store';
  aboutBtnText = 'About';
  isActive = true;
  ngOnInit(): void {}
}
