import { Component, OnInit } from '@angular/core';

import { ArticuleService } from '../articule.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Articule } from 'src/app/class/articule';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  articule: Articule;
  form: FormGroup;

  constructor(
    public articuleService: ArticuleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idArticule'];
    this.articuleService.find(this.id).subscribe((data: Articule)=>{
      this.articule = data;
    });

    this.form = new FormGroup({
      code:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      name:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      salePrice: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      codePostal: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      stock:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      description: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      img: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.articuleService.update(this.id, this.form.value).subscribe(res => {
         console.log('Articule updated successfully!');
         this.router.navigateByUrl('articule/index');
    })
  }

}

