import { Component, OnInit } from '@angular/core';
import { FormControlName, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsDBService } from '../providers/products/products-db.service';
import { Products } from '../models/product_class';
import { CategoryDBService } from '../providers/categoryDB/category-db.service';
import { Category } from '../models/category_class';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  category: Category[] = [];
  category_id: number;
  constructor(
    public router: Router,
    public _dataProduct: ProductsDBService,
    public _dataCategory: CategoryDBService
  ) {}

  ngOnInit() {
    this._dataCategory.getAllCategories().subscribe(
      (data: any) => {
        console.log(data.Data);
        this.category = data.Data;

      },
      function(e) {
        alert(e);
      },
      function() {}
    );
  }

  onAdd(productForm) {
    // tslint:disable-next-line:max-line-length
    this._dataProduct
      .addProduct(
        new Products(
          null,
          productForm.value.pro_name,
          productForm.value.pro_price,
          productForm.value.pro_color,
          productForm.value.pro_warranty,
          productForm.value.pro_spec,
          productForm.value.category_id,
          'demo image'
        )
      )
      .subscribe(
        (data: any) => {
          console.log(data.Data);
          // this.router.navigate('products');
          alert('Product Added Successfully');
        },
        function(e) {
          alert(e);
        },
        function() {}
      );
  }
}
