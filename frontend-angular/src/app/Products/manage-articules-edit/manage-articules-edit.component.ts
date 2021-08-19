import { Component, OnInit } from '@angular/core';
import { Articule } from '../../class/articule';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-articules-edit',
  templateUrl: './manage-articules-edit.component.html',
  styleUrls: ['./manage-articules-edit.component.css']
})

export class ManageArticulesEditComponent implements OnInit {
  id: number;
  articule: Articule;
  form: FormGroup;

  constructor(
    public servicesService: ServicesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      code:  new FormControl('', [ Validators.required, Validators.pattern('^[0-9]*$') ]),
      name:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      salePrice: new FormControl('', [ Validators.required, Validators.pattern("^(?!\s|.*\s$).*$")]),
      codePostal: new FormControl('', [ Validators.required, Validators.minLength(6),Validators.maxLength(6)  ]),
      stock:  new FormControl('', [ Validators.required, Validators.maxLength(50) ]),
      description: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      image: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      id_sub_categories: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
    });

    this.id = this.route.snapshot.params['idArticule'];
    this.servicesService.find(this.id).subscribe((data: Articule)=>{
      this.form.get('code').setValue(data.code);
      this.form.get('name').setValue(data.name);
      this.form.get('salePrice').setValue(data.salePrice);
      this.form.get('codePostal').setValue(data.codePostal);
      this.form.get('stock').setValue(data.stock);
      this.form.get('description').setValue(data.description);
      this.form.get('image').setValue(data.image);
      this.form.get('id_sub_categories').setValue(data.id_sub_categories);
    });

  }

  get f(){
  
    return this.form.controls;
  }

  submit(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to edit?",
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, edit it!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(this.form.value);
    this.servicesService.updateArticuleData(this.id, this.form.value).subscribe(res => {
         console.log('Articule updated successfully!');
         this.router.navigateByUrl('manage-articules');
    })
        Swal.fire(
          'Edited!',
          'Your file has been edited.',
          'success'
        )
      }
    })
  }
}