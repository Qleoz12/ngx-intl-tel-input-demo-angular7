import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  phoneNumber: string;
  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required]),
  });

  ngOnInit() {
    this.phoneNumber = '12';
  }

  chcountry(event) {
    console.log(event);
  }
}
