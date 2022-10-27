import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  text: string = '';
  editedId: number = 0;
  contacts: { id: number; text: string }[] = [];

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    if (this.editedId === 0) {
      this.contacts.push({ id: new Date().getTime(), text: this.text });
    } else {
      this.contacts = this.contacts.map((contact) =>
        contact.id === this.editedId ? { ...contact, text: this.text } : contact
      );

      this.editedId = 0;
    }

    this.text = '';
  }

  onEdit(id: number) {
    this.editedId = id;
    this.text = this.contacts.find((contact) => contact.id === id)?.text || '';
  }

  onDelete(id: number) {
    this.contacts = this.contacts.filter((contact) => contact.id !== id);
  }
}
