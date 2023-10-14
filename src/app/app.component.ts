import { Component } from '@angular/core';
import { CoffeeServiceService } from './coffee-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Client';

  constructor(private coffeeService: CoffeeServiceService) {}

  getList() {
    this.coffeeService.getList().subscribe((data) => {
      console.log(data);
    });
  }
}
