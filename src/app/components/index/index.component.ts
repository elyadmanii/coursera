import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  array = [1, 2, 3, 4];
  topCours = [{ 'id': 1, 'name': 'Mathématique', 'path': 'assets/images/top/1.jpg' },
              { 'id': 2, 'name': 'Informatique', 'path': 'assets/images/top/2.jpg' },
              { 'id': 3, 'name': 'Physique', 'path': 'assets/images/top/3.jpg' },
              { 'id': 4, 'name': 'Chimie', 'path': 'assets/images/top/4.jpg' }];

  constructor() { }

  ngOnInit() {
  }

}
