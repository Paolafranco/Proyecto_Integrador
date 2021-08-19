import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categories } from '../class/categories';
import { Articule } from '../class/articule';
import { Products } from '../class/products';
import { subCategories } from '../class/subCategories';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
  constructor(private httpClient:HttpClient) {} 
  private url = 'http://localhost:8000/api';
  
    //categories
    getCategoriesData(){
     return this.httpClient.get('http://127.0.0.1:8000/api/categories');
    }
    insertCategorieData(data: Categories){
     return this.httpClient.post('http://127.0.0.1:8000/api/categories',data) ;
    }
    deleteCategorieData(id:any){
      return this.httpClient.delete(`http://127.0.0.1:8000/api/categories/${id}`);
    }
    getCategorieById(id:any){
      return this.httpClient.get(`http://127.0.0.1:8000/api/categories/${id}`);
    }
    updateCategorieData(id:any , data: Categories){
      return this.httpClient.put(`http://127.0.0.1:8000/api/categories/${id}`,data) ;
    } 
    //articules
    getArticulesData(){
      return this.httpClient.get<Articule[]>(`${this.url}/getAllArti`);
    }
    
    crearE(code: string, name: string, salePrice: string, codePostal: string, stock: string, description: string, id_sub_categories : string, file: File): Observable<Object> {
      const form = new FormData()
      form.append('code', code);
      form.append('name', name);
      form.append('salePrice', salePrice);
      form.append('codePostal', codePostal);
      form.append('stock', stock);
      form.append('description', description);
      form.append('id_sub_categories', id_sub_categories);
      form.append('file', file, 'form-data');

      return this.httpClient.post<Object>(`${this.url}/createArticule`, form)
    }
    deleteArticuleData(id:any){
      return this.httpClient.delete(`http://127.0.0.1:8000/api/articules/${id}`);
    }
    getArticuleById(id:any){
      return this.httpClient.get(`http://127.0.0.1:8000/api/categories/${id}`);
    }
    updateArticuleData(id:any , dataArticule ){
      return this.httpClient.put(`http://127.0.0.1:8000/api/articules/${id}`,JSON.stringify(dataArticule)) ;
    } 
    find(id): Observable<Articule> {
      return this.httpClient.get<Articule>(`${this.url}/edit/${id}`)
    }
    
    //products
    getProductsData(){
      return this.httpClient.get('http://127.0.0.1:8000/api/products');
     }
     insertProductData(dataproducts: Products){
      return this.httpClient.post('http://127.0.0.1:8000/api/products',dataproducts) ;
     }
     deleteProductData(id:any){
      return this.httpClient.delete(`http://127.0.0.1:8000/api/products/${id}`);
    }
    getProductsById(id:any){
      return this.httpClient.get(`http://127.0.0.1:8000/api/products/${id}`);
    }
    updateProductsData(id:any , dataproducts: Products){
      return this.httpClient.put(`http://127.0.0.1:8000/api/products/${id}`,dataproducts) ;
    }

//subcategorias
getsubCategoriesData(){
  return this.httpClient.get('http://127.0.0.1:8000/api/subCategories');
 }
 insertsubCategorieData(data: subCategories){
  return this.httpClient.post('http://127.0.0.1:8000/api/subCategories',data) ;
 }
 deletesubCategorieData(id:any){
   return this.httpClient.delete(`http://127.0.0.1:8000/api/subCategories/${id}`);
 }
 getsubCategorieById(id:any){
   return this.httpClient.get(`http://127.0.0.1:8000/api/subCategories/${id}`);
 }
 updatesubCategorieData(id:any , data: subCategories){
   return this.httpClient.put(`http://127.0.0.1:8000/api/subCategories/${id}`,data) ;
 } 
}
