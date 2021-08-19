import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Articule } from 'src/app/class/articule';
import { FormGroup, FormControl, Validators, FormBuilder, FormGroupName } from '@angular/forms';

@Component({
  
  selector: 'app-manage-articules',
  templateUrl: './manage-articules.component.html',
  styleUrls: ['./manage-articules.component.css']
})
export class ManageArticulesComponent implements OnInit {
  articules:any;
  articule=new Articule();
  imageForm:FormGroup;
  file:any;
  image: any = "../../assets/fondo.jpg"; 
 constructor(private ServicesServices:ServicesService) { }

  ngOnInit(): void {
    this.getArticuleData();
    this.imageForm = new FormGroup({
      code: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      salePrice: new FormControl(null, Validators.required),
      codePostal: new FormControl(null, Validators.required),
      stock : new FormControl(null, Validators.required),
      description : new FormControl(null, Validators.required),
      id_sub_categories : new FormControl(null, Validators.required),
      file: new FormControl(null, Validators.required)
    })
  }
  getArticuleData(){
    this.ServicesServices.getArticulesData().subscribe(res=>{
      console.log(res)
      this.articules=res['data'];
    });     
  }
  onFileChange(event) {
    if(event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if(file.type.includes("image")) {
        const reader = new FileReader()
        reader.readAsDataURL(file);

        reader.onload = function load() {
          this.image = reader.result;
        }.bind(this);
        this.file = file;
      }else {
        console.log("error");
      }
    }
  }

  onSubmit(){
    const form = this.imageForm;
    if(form.valid) {
      this.ServicesServices.crearE(form.value.code, form.value.name, form.value.salePrice, form.value.codePostal, form.value.stock, form.value.description, form.value.id_sub_categories, this.file )
      .subscribe(data => {
        this.imageForm = new FormGroup({
          code: new FormControl(null),
          name: new FormControl(null),
          salePrice: new FormControl(null),
          codePostal: new FormControl(null),
          stock : new FormControl(null),
          description : new FormControl(null),
          id_sub_categories : new FormControl(null),
          file: new FormControl(null),

        })
        this.image = "../../assets/fondo.jpg";
        console.log(data)
        
      })
    }
  }
  deleteDataArticules(id:any){
    console.log(id);
    this.ServicesServices.deleteArticuleData(id).subscribe(res => {
      this.getArticuleData();
      console.log(res);
    }
    ); 
  }
}
