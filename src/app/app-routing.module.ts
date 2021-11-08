import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
;
import { HomeComponent } from './home/home.component';

import { ProductsCardComponent } from './products-card/products-card.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:productId', component: ProductDetailsComponent },
 
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
