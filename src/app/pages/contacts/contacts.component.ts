import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  isModalOpen = false;

  constructor() {}

  ngOnInit(): void {}

  onAddContact(): void {
    this.isModalOpen = !this.isModalOpen;
  }
}
