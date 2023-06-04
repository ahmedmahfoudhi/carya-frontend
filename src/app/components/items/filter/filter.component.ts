import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GOVERNORATES } from 'src/app/shared/governorates';
import { environment } from 'src/environments/environment';

const maxPossiblePrice = 4000;
const minPossiblePrice = 0;

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  @Input() minValue: number = minPossiblePrice;
  @Input() maxValue: number = maxPossiblePrice;
  @Input() governorate: string = 'all';
  @Input() category: string = 'all';
  categories = [
    { value: 'all', displayName: 'All' },
    { value: 'home', displayName: 'Houses' },
    { value: 'car', displayName: 'Cars' },
  ];
  governorates;
  options: Options = {
    floor: minPossiblePrice,
    ceil: maxPossiblePrice,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '$' + value;
        case LabelType.High:
          return '$' + value;
        default:
          return '$' + value;
      }
    },
  };
  constructor(private router: Router) {
    this.governorates = GOVERNORATES.map((governorate) => ({
      value: governorate.toLowerCase(),
      displayName: governorate,
    }));
    this.governorates.unshift({
      value: 'all',
      displayName: 'All',
    });
  }

  ngOnInit(): void {}

  applyFilter() {
    this.router.navigate(['/properties'], {
      queryParams: {
        category: this.category,
        minPrice: this.minValue,
        maxPrice: this.maxValue,
        governorate: this.governorate,
      },
    });
  }

  resetFilter() {
    this.minValue = minPossiblePrice;
    this.maxValue = maxPossiblePrice;
    this.category = 'all';
    this.governorate = 'all';
  }
}
