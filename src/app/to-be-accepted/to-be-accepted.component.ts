import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';

import { MatTableDataSource, MatSort, MatPaginator, Sort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ProductsDBService } from '../providers/products/products-db.service';
import { AcceptOrders } from '../models/accept_order';

@Component({
  selector: 'app-to-be-accepted',
  templateUrl: './to-be-accepted.component.html',
  styleUrls: ['./to-be-accepted.component.scss']
})
export class ToBeAcceptedComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['product_name', 'product_price', 'product_color', 'product_quantity', 'date', 'action'];
  dataSource: MatTableDataSource<AcceptOrders>;
  selection = new SelectionModel<AcceptOrders>(true, []);

  arrOrder: AcceptOrders[] = [];

  constructor(public _dataProduct: ProductsDBService) { }

  ngOnInit() {
    this._dataProduct.ordersToAccept(12).subscribe(
      (data: any) => {
        this.arrOrder = data;
        console.log(data);
        this.dataSource = new MatTableDataSource(this.arrOrder);
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

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  updateStatus(item: AcceptOrders) {
    this._dataProduct.updateRetailer(item.order_id, item.retailer_id).subscribe(
      (data: any) => {
        alert('Order Accepted');
        this.ngOnInit();
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    ) ;
  }


}
