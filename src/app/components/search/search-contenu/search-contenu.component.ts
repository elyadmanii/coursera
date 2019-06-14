import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-contenu',
  templateUrl: './search-contenu.component.html',
  styleUrls: ['./search-contenu.component.css']
})
export class SearchContenuComponent implements OnInit {

  validateForm: FormGroup;

  listOfData = [];

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.listOfData = [
      {id: '1',name: 'Math'},
      {id: '2',name: 'Physique'},
      {id: '3',name: 'Info'}
    ];
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      value: [null, [Validators.required]]
    });
  }
  

}
