import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemsComponent } from './components/items/items.component';
import { HttpClientModule } from "@angular/common/http";
import { CategoryComponent } from './components/category/category.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { FilterPipe } from './pipe/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { ManageProductComponent } from './components/manage-product/manage-product.component';
import { ManageItemsComponent } from './components/manage-items/manage-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent,
    CategoryComponent,
    CategoryItemComponent,
    FilterPipe,
    ItemDetailsComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    CartComponent,
    ManageProductComponent,
    ManageItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
