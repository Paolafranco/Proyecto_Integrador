import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Categories } from '../../class/categories';
@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.css']
})
export class ManageCategoriesComponent implements OnInit {
  categories: any;
  categorie= new Categories();
  constructor(private ServicesServices: ServicesService) { }

  ngOnInit(): void {
    this.getCategorieData();
  }
  getCategorieData() {
    this.ServicesServices.getCategoriesData().subscribe(res => {
      console.log(res);
      this.categories = res;
    })
  }
  insertDataCategories() {
    console.log(this.categorie);
    this.ServicesServices.insertCategorieData(this.categorie).subscribe(res => {
      console.log(res);
      this.getCategorieData();
    })
  }
  deleteDataCategories(id: any) {
    console.log(id);
    this.ServicesServices.deleteCategorieData(id).subscribe(res => {
      this.getCategorieData();
      console.log(res);
    }
    );
    this.getCategorieData();
  }
}
