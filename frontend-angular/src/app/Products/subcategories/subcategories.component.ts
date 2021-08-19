import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent implements OnInit {
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goProducts(){
    this.router.navigate(['/products'])
  }
}
