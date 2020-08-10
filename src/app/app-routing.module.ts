import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StorePageComponent } from './store-page/store-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'store', component: StorePageComponent },
  {
    path: 'store/:name/:description/:imgUrl/:price',
    component: ItemDetailComponent,
  },
  { path: 'about', component: AboutPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
