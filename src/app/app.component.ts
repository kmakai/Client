import { Component } from '@angular/core';
import { CoffeeServiceService } from './coffee-service.service';
import { Coffee } from 'src/Models/Coffee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Client';
  coffeeList: Coffee[] = [];

  constructor(private coffeeService: CoffeeServiceService) {
    this.getList();
  }

  getList() {
    this.coffeeService.getCoffees().subscribe((data) => {
      console.log(data);
      this.coffeeList = data;
    });
  }
  onCoffeeAdded(): void {
    this.coffeeService.getCoffees().subscribe((coffees) => {
      this.coffeeList = coffees;
    });
  }

}
