import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [FormsModule, CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
})
export class Products {

  ProductsList: string[] = [];
  NewProduct: string = "";

  AddProduct(){
    if (this.NewProduct && this.NewProduct.trim()){

      this.ProductsList.push(this.NewProduct.trim())

      this.NewProduct  = "";
    }
  }

  DeleteProduct($index:number){
     this.ProductsList.splice($index,1);


  }
}

