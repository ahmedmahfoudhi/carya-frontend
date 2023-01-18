import { Component, Input, OnInit } from '@angular/core';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.css'],
})
export class SingleItemComponent implements OnInit {
  @Input() item!: Item;
  @Input() image!: string;
  faDollarSign = faDollarSign;
  constructor() {}

  ngOnInit(): void {}
}
