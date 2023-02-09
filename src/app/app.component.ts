import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Content Projection';

  products=[
    {
      id : '1',
      name: 'Laptop',
      status: 'Out of stock',
      price: '5000'
    },
    {
      id : '1',
      name: 'Mobile',
      status: 'available',
      price: '8000'
    },
    {
      id : '1',
      name: 'Tablet',
      status: 'available',
      price: '7000'
    },
    {
      id : '1',
      name: 'Earphone',
      status: 'Out of stock',
      price: '6000'
    },
    {
      id : '1',
      name: 'Charger',
      status: 'available',
      price: '4000'
    },
    {
      id : '1',
      name: 'Smart Watch',
      status: 'Out of stock',
      price: '3000'
    },
    {
      id : '1',
      name: 'Ipad',
      status: 'available',
      price: '2000'
    }
  ]

  bakery=[
    {
      id : '1',
      name: 'Cake',
      status: 'Out of stock',
      price: '500'
    },
    {
      id : '1',
      name: 'Cupcake',
      status: 'available',
      price: '800'
    },
    {
      id : '1',
      name: 'Mini cake',
      status: 'available',
      price: '700'
    },
    {
      id : '1',
      name: 'Pastery',
      status: 'Out of stock',
      price: '600'
    },
    {
      id : '1',
      name: 'Blue berry cake',
      status: 'available',
      price: '400'
    }
  ]
}
