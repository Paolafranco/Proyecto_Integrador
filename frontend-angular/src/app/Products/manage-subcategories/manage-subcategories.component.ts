import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { subCategories } from '../../class/subcategories';

@Component({
  selector: 'app-manage-subcategories',
  templateUrl: './manage-subcategories.component.html',
  styleUrls: ['./manage-subcategories.component.css']
})
export class ManageSubcategoriesComponent implements OnInit {

  subcategories: any;
  subcategorie= new subCategories();
  constructor(private ServicesServices: ServicesService) { }

  ngOnInit(): void {
    this.getsubCategorieData();
  }
  getsubCategorieData() {
    this.ServicesServices.getsubCategoriesData().subscribe(res => {
      console.log(this.subcategorie);
      this.subcategories = res;
    })
  }
  insertDatasubCategories() {
    console.log(this.subcategories);
    this.ServicesServices.insertsubCategorieData(this.subcategorie).subscribe(res => {
      console.log(res);
      this.getsubCategorieData();
    })
  }
  deleteDatasubCategories(id: any) {
    console.log(id);
    this.ServicesServices.deletesubCategorieData(id).subscribe(res => {
      this.getsubCategorieData();
      console.log(res);
    }
    );
    this.getsubCategorieData();
  }
}

