import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './Products/categories/categories.component';
import { SubcategoriesComponent } from './Products/subcategories/subcategories.component';
import { ProductsComponent } from './Products/products/products.component';
import { ManageArticulesCreateComponent } from './Products/manage-articules-create/manage-articules-create.component'; 
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
import { ArticuleComponent } from './Products/articule/articule.component';

const route: Routes = [
  { path: 'manage-categories', component: ManageCategoriesComponent },
  { path: 'manage-subcategories', component: ManageSubcategoriesComponent },
  { path: 'manage-products', component: ManageProductsComponent },
  { path: 'manage-articules', component: ManageArticulesComponent },
  { path: 'navbar-manage', component: NavbarManageComponent },
  { path: 'manage-categories/edit-categorie/:id', component: ManageCategoriesEditComponent },
  {path:'manage-articules/edit-articules/:id',component:ManageArticulesEditComponent},
 { path: 'manage-articules/create-articules', component: ManageArticulesCreateComponent },
  {path:'manage-products/edit-products/:id',component:ManageProductsEditComponent}, 
  { path: 'articules', component: ArticuleComponent },
  { path: 'manage-subcategories/edit-subcategorie/:id', component: ManageSubCategoriesEditComponent },


  { path: 'articles', component: ArticuleComponent },
  { path:'products', component: ProductsComponent },
  { path:'subcategories', component: SubcategoriesComponent },
  { path:'categories', component:CategoriesComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
