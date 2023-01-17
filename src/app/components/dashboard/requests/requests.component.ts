import { Component, OnInit } from '@angular/core';
import { requestsData } from './requests';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  myRequests = requestsData
  constructor() { }

  ngOnInit(): void {
  }

}
