import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductUpdateComponent} from './product-update/product-update.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';


@NgModule({
  declarations: [ProductListComponent, ProductCreateComponent, ProductUpdateComponent, ProductDeleteComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule {
}
