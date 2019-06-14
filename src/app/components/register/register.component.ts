import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  eleve = true;
  size = "large";
  submitted = false;
  type_users = [{ id: 1, label: 'Eleve' }, { id: 2, label: 'Professeur' }];
  langues = [{ id: 1, label: 'Francais' }, { id: 2, label: 'Anglais' }, { id: 3, label: 'Espagnol' }];
  cours = [{ id: 1, label: 'Math' }, { id: 2, label: 'Physique' }, { id: 2, label: 'Info' }, { id: 2, label: 'BigData' }];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      user: ['', Validators.required],
      type: [this.type_users[0], Validators.required],
      cour: [[], Validators.required],
      date: [[], Validators.required],
      langue: [null, Validators.required],
      password: ['', Validators.required]
    });


  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  update_form() {

    const cour = this.registerForm.get('cour');
    const date = this.registerForm.get('date');
    const langue = this.registerForm.get('langue');

    if (this.registerForm.get('type').value.id == 1) {
      this.eleve = true;
      cour.setValidators([Validators.required]);
      date.setValidators([Validators.required]);
      langue.setValidators([Validators.required]);
    }
    if (this.registerForm.get('type').value.id == 2) {
      this.eleve = false;
      cour.setValidators(null);
      date.setValidators(null);
      langue.setValidators(null);
    }

    cour.updateValueAndValidity();
    date.updateValueAndValidity();
    langue.updateValueAndValidity();
  }


  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm)
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log("invalid")
      return;
    }
    console.log("valid")
    this.loading = true;


  }

}
