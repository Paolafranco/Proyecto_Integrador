import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-articule',
  templateUrl: './articule.component.html',
  styleUrls: ['./articule.component.css']
})
export class ArticuleComponent implements OnInit {

  constructor(public router:Router) {}

  ngOnInit(): void {
  }

}
