import { Component, OnInit } from '@angular/core';
import { ManageArticulesComponent } from '../manage-articules/manage-articules.component';
import { Router } from '@angular/router';
import { ServicesService } from '../../services/services.service';
import {Products} from '../../class/products';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products: any;
    product= new Products();
  constructor(private ServicesServices: ServicesService) { }

  ngOnInit(): void {
    this.getProductData();
    
  }
  getProductData() {
    this.ServicesServices.getProductsData().subscribe(res => {
      console.log(res);
      this.products = res;
    })
}
insertDataProducts() {
   console.log(this.product);
   this.ServicesServices.insertProductData(this.product).subscribe(res => {
     console.log(res);
     this.getProductData();
   })
}
deleteDataProducts(id: any) {
  console.log(id);
  this.ServicesServices.deleteProductData(id).subscribe(res => {
    this.getProductData();
    console.log(res);
  }
  );
  this.getProductData();
}
}