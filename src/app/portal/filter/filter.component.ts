import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  SearchForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.SearchForm = this.formBuilder.group({
      Property: ['0', Validators.required],
      Sale: ['0', Validators.required],
      Location: ['0', Validators.required],
      PriceRange: ['0', Validators.required],
      Badroom: ['0', Validators.required],
      Bathroom: ['0', Validators.required]
    });
  }
  SearchSubmit() {
    console.log(this.SearchForm);
  }
}
