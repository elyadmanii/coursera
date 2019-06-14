import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-gestion-cours',
  templateUrl: './gestion-cours.component.html',
  styleUrls: ['./gestion-cours.component.css']
})
export class GestionCoursComponent implements OnInit {

  listOfData = [
    {
      id: 1,
      nom: 'Math',
      langue: 'Francais',
      date_debut: new Date('Mon Jun 03 2019 18:09:35 GMT+0000 (UTC+01:00)'),
      date_fin: new Date('Mon Jun 13 2019 18:09:35 GMT+0000 (UTC+01:00)'),
      nbr_heure: 50,
      nb_semaine: 10
    },
    {
      id: 2,
      nom: 'Physique',
      langue: 'Anglais',
      date_debut: new Date('Mon Jun 04 2019 18:09:35 GMT+0000 (UTC+01:00)'),
      date_fin: new Date('Mon Jun 23 2019 18:09:35 GMT+0000 (UTC+01:00)'),
      nbr_heure: 55,
      nb_semaine: 9
    },
    {
      id: 3,
      nom: 'Informatique',
      langue: 'Espagnole',
      date_debut: new Date('Mon Jun 01 2019 18:09:35 GMT+0000 (UTC+01:00)'),
      date_fin: new Date('Mon Jun 30 2019 18:09:35 GMT+0000 (UTC+01:00)'),
      nbr_heure: 99,
      nb_semaine: 15
    }
  ];
  registerForm: FormGroup;
  loading = false;
  size = "large";
  submitted = false;
  langues = [{ id: 1, label: 'Francais' }, { id: 2, label: 'Anglais' }, { id: 3, label: 'Espagnol' }];


  constructor(private formBuilder: FormBuilder, private notification: NzNotificationService) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      date: [[], Validators.required],
      langue: [null, Validators.required],
      heures: ['', Validators.required],
      semaines: ['', Validators.required]
    });
  }

  isVisible = false;
  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  get f() {
    return this.registerForm.controls;
  }


  Supprimer(id: number) {
    var i = 0;
    for (var item of this.listOfData) {
      if (item.id == id) {
        this.listOfData.splice(i, 1);
        console.log(this.listOfData);
        this.notification.create(
          'success',
          'Cours',
          'Supprimé avec succès'
        );
        break;
      }
      i++;
    }

  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.listOfData.push({
      id: (this.listOfData[this.listOfData.length - 1] ? this.listOfData[this.listOfData.length - 1].id + 1 : 1),
      nom: this.registerForm.value.nom,
      langue: this.registerForm.value.langue.label,
      date_debut: this.registerForm.value.date[0],
      date_fin: this.registerForm.value.date[1],
      nbr_heure: this.registerForm.value.heures,
      nb_semaine: this.registerForm.value.semaines
    });

    this.isVisible = false;
    this.listOfData = this.listOfData;
    console.log(this.listOfData);
    this.notification.create(
      'success',
      'Cours',
      'Crée avec succès'
    );

  }


}
