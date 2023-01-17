import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  totalItems: number;
  pageNumber: number;
  items: Array<Item>;
  constructor() { 
    this.totalItems = 0;
    this.pageNumber = 1;
    this.items = new Array<Item>();
  }

  ngOnInit(): void {
  }

}
