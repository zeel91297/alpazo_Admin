import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { DataSource } from '@angular/cdk/collections';

import { MatTableDataSource, MatSort, MatPaginator, Sort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { PendingOrder } from '../models/pending_order_class';
import { ProductsDBService } from '../providers/products/products-db.service';



@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.scss']
})
export class PendingOrdersComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  arrPending: PendingOrder[] = [];
  delPending: PendingOrder[] = [];

  // tslint:disable-next-line:max-line-length
  displayedColumns = [ 'product_name', 'product_price', 'stock', 'delivery', 'user_name', 'user_phone', 'user_pincode', 'date'];

  dataSource: MatTableDataSource<PendingOrder>;
  selection = new SelectionModel<PendingOrder>(true, []);

  constructor(private _dataProduct: ProductsDBService) { }

  ngOnInit() {
    this._dataProduct.getPendingOrders(3).subscribe(
      (data: any) => {
        this.arrPending = data;
        console.log(data);
        this.dataSource = new MatTableDataSource(this.arrPending);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      function(e) {
        alert(e);
      },
      function() {

      }
    );
  }

  applyFilter(filtervalue: string) {
    filtervalue = filtervalue.trim();
    filtervalue = filtervalue.toLocaleLowerCase();
    this.dataSource.filter = filtervalue;
  }

}
