import { Component, OnInit } from '@angular/core';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss'],
})
export class LeadsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
