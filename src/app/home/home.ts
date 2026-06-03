import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.searchForm = this.fb.group({
      source: ['', Validators.required],
      destination: ['', Validators.required],
      journeyDate: ['', Validators.required]
    });

  }

  searchBus() {

    if (this.searchForm.invalid) {
      this.searchForm.markAllAsTouched();
      return;
    }

    console.log(this.searchForm.value);
  }

}