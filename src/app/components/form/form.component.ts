import { Component } from '@angular/core';
import {
  FormControl,
  NgForm,
  FormGroup,
  Validators,
  FormArray,
  FormBuilder,
} from '@angular/forms';
import { Coffee } from 'src/Models/Coffee';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  coffeeForm = new FormGroup({
    id: new FormControl('0'),
    date: new FormControl(new Date().toISOString().substring(0, 10)),
    cups: new FormControl('5'),
  });

  onSubmit() {
    console.log(this.coffeeForm.value);
  }
}
