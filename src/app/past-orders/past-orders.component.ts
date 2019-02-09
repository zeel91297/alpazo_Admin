import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { DataSource } from '@angular/cdk/collections';

import { MatTableDataSource, MatSort, MatPaginator, Sort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ProductsDBService } from '../providers/products/products-db.service';
import { PastOrderClass } from '../models/product_class';

@Component({
  selector: 'app-past-orders',
  templateUrl: './past-orders.component.html',
  styleUrls: ['./past-orders.component.scss']
})
export class PastOrdersComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  arrPast: PastOrderClass[] = [];
  delPast: PastOrderClass[] = [];

  displayedColumns = ['retailer_name', 'retailer_mobile', 'retailer_pincode', 'date'];

  dataSource: MatTableDataSource<PastOrderClass>;
  selection = new SelectionModel<PastOrderClass>(true, []);

  constructor(private _dataProduct: ProductsDBService) { }

  ngOnInit() {
    this._dataProduct.getPastOrders(12).subscribe(
      (data: PastOrderClass[]) => {
        this.arrPast = data;
        console.log(data);
        this.dataSource = new MatTableDataSource(this.arrPast);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  applyFilter(filtervalue: string) {
    filtervalue = filtervalue.trim();
    filtervalue = filtervalue.toLocaleLowerCase();
    this.dataSource.filter = filtervalue;
  }

}
