import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorResponse } from 'src/app/interfaces/error-response.interface';
import { ItemsQueryParams } from 'src/app/interfaces/items-query-params';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

const MIN_PRICE = 0;
const MAX_PRICE = 4000;
@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
})
export class ItemsListComponent implements OnInit, OnDestroy {
  totalItems: number;
  pageNumber: number;
  items: Item[];
  category = 'all';
  mnPrice = 0;
  mxPrice = 4000;
  governorate = 'all';
  constructor(
    private itemService: ItemService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {
    this.totalItems = 0;
    this.pageNumber = 1;
    this.items = [];
  }
  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe({
      next: (queryParams) => this.receiveQueryParams(queryParams),
    });
  }

  receiveQueryParams(queryParams: any) {
    this.category = queryParams['category'] || 'all';
    let minPrice = this.getPrice(queryParams['min-price'], MIN_PRICE);
    let maxPrice = this.getPrice(queryParams['max-price'], MAX_PRICE);
    this.governorate = queryParams['governorate'] || 'all';
    console.log(minPrice, maxPrice);
    this.mnPrice = Math.min(minPrice, maxPrice);
    this.mxPrice = Math.max(minPrice, maxPrice);
    const itemsQueryParams: ItemsQueryParams = {
      category: this.category == 'all' ? undefined : this.category,
      minPrice: this.mnPrice,
      maxPrice: this.mxPrice,
      governorate: this.governorate == 'all' ? undefined : this.governorate,
    };

    this.itemService.getAllItems(itemsQueryParams).subscribe({
      next: (respnse) => this.handleResponse(respnse),
      error: ({ error }) => this.handleError(error),
    });
  }

  handleResponse(response: Item[]) {
    this.items = response;
    this.totalItems = this.items.length;
    console.log(this.items);
  }

  handleError(error: ErrorResponse) {
    this.toastr.error('Something went wrong, try refreshing the page');
  }

  getPrice(price: string, alternativeValue: number) {
    let result = alternativeValue;
    try {
      result = parseInt(price);
      if (isNaN(result) || result < MIN_PRICE || result > MAX_PRICE)
        result = alternativeValue;
    } catch (error) {}
    return result;
  }
}
