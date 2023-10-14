import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Coffee } from 'src/Models/Coffee';
import { CoffeeServiceService } from 'src/app/coffee-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  list$: Observable<Coffee[]>;

  constructor(private coffeeService: CoffeeServiceService) {
    this.list$ = coffeeService.getList();
  }
}
