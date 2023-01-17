import { Component, OnInit } from '@angular/core';
import { myItemsData } from './my_items';

@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.css']
})
export class MyItemsComponent implements OnInit {
  myItems=myItemsData;
  constructor() { }

  ngOnInit(): void {
  }

}
