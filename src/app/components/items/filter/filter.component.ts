import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';


const maxPossiblePrice = 4000;
const minPossiblePrice = 0;  

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
  
  
export class FilterComponent implements OnInit {

  minValue: number = minPossiblePrice;
  maxValue: number = maxPossiblePrice;
  options: Options = {
    floor: minPossiblePrice,
    ceil: maxPossiblePrice,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "$" + value;
        case LabelType.High:
          return "$" + value;
        default:
          return "$" + value;
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

  applyFilter() {
    console.log(this.minValue, this.maxValue);
  }

  resetFilter() {
    this.minValue = minPossiblePrice;
    this.maxValue = maxPossiblePrice;
  }

}
