import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { HttpClientModule } from '@angular/common/Http';
import { ItemService } from './item.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavButtonComponent } from './nav-button/nav-button.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ImageViewComponent } from './image-view/image-view.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StorePageComponent } from './store-page/store-page.component';
import { ItemContainerComponent } from './item-container/item-container.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  declarations: [AppComponent, ItemsComponent, NavBarComponent, NavButtonComponent, HomePageComponent, ImageViewComponent, FooterComponent, StorePageComponent, ItemContainerComponent, ItemDetailComponent, AboutPageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [ItemService],
  bootstrap: [AppComponent],
})
export class AppModule {}
