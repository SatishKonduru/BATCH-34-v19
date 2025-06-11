import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  imports: [CommonModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css',
})
export class ForComponent {
  fruits = ['Apple', 'Mango', 'Kiwi'];
  items = ['One', 'Two', 'Three'];
  users = [
    { name: 'Chiranjeevi' },
    { name: 'Balaiah' },
    { name: 'Anushka' },
    { name: 'Thamanna' },
    { name: 'Pawan Kalyan' },
  ];

  products = [
    { id: 1, name: 'Laptop', inStock: true },
    { id: 2, name: 'Phone', inStock: false },
    { id: 3, name: 'Mouse', inStock: true },
    { id: 4, name: 'Keyboard', inStock: false },
    { id: 5, name: 'Monitor', inStock: true },
  ];

  categories = [
    {
      name: 'Fruits',
      items: ['Apple', 'Banana'],
    },
    {
      name: 'Dairy',
      items: ['Milk', 'Cheese'],
    },
  ];

  myObj = {
    name: 'RSK',
    channel: 'RSK TechMinds',
    subject: 'AI',
  };
}
