import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdvertisingFlyersComponent } from './Components/Advertising/advertising-flyers/advertising-flyers.component';
import { AdvertisingBannersComponent } from './Components/Advertising/advertising-banners/advertising-banners.component';
import { AdvertisingRecomendedComponent } from './Components/Advertising/advertising-recomended/advertising-recomended.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { CategoriesComponent } from './Products/categories/categories.component';
import { SubcategoriesComponent } from './Products/subcategories/subcategories.component';
import { ProductsComponent } from './Products/products/products.component';
import { ArticuleComponent } from './Products/articule/articule.component';
import { ManageCategoriesComponent } from './Products/manage-categories/manage-categories.component';
import { ManageSubcategoriesComponent } from './Products/manage-subcategories/manage-subcategories.component';
import { ManageArticulesComponent } from './Products/manage-articules/manage-articules.component';
import { ManageProductsComponent } from './Products/manage-products/manage-products.component';
import { NavbarManageComponent } from './Products/navbar-manage/navbar-manage.component';
import { ManageCategoriesEditComponent } from './Products/manage-categories-edit/manage-categories-edit.component';
import { NavEcushopComponent } from './Products/nav-ecushop/nav-ecushop.component';
import { ManageArticulesEditComponent } from './Products/manage-articules-edit/manage-articules-edit.component';
import { ManageProductsEditComponent } from './Products/manage-products-edit/manage-products-edit.component';
import { ManageSubCategoriesEditComponent } from './Products/manage-sub-categories-edit/manage-sub-categories-edit.component';
import { ManageArticulesCreateComponent } from './Products/manage-articules-create/manage-articules-create.component';


@NgModule({
  declarations: [
    AppComponent,
    ManageCategoriesComponent,
    ManageSubcategoriesComponent,
    ManageArticulesComponent,
    ManageProductsComponent,
    NavbarManageComponent,
    ManageCategoriesEditComponent,

    CategoriesComponent,
    ArticuleComponent,
    ProductsComponent,
    SubcategoriesComponent,
    NavEcushopComponent,
    ManageArticulesEditComponent,
    ManageProductsEditComponent,
    ManageSubCategoriesEditComponent,
    ManageArticulesCreateComponent,
    ],
  imports: [BrowserModule, AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
