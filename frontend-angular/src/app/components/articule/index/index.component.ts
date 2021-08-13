import { Component, OnInit } from '@angular/core';


import { ArticuleService } from '../articule.service';
import { Articule } from 'src/app/class/articule';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

 
  articules: Articule[] = [];

  // constructor() { }
  constructor(public  articuleService: ArticuleService) { }

  ngOnInit(): void {
    this. articuleService.getAll().subscribe((data: Articule[])=>{
      this. articules = data;
      console.log(this. articules);
    })
  }

  deleteArticule(id){
    this. articuleService.delete(id).subscribe(res => {
         this. articules = this. articules.filter(item => item.id !== id);
         //console.log(' Articules deleted successfully!');
    })
  }

}
