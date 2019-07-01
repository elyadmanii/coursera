import { Component } from '@angular/core';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning';

  constructor(private backendService: BackendService) { }


  ngOnInit() {
    this.backendService.getAllCoures().subscribe(response => {
      console.log("courses", response);
    })
  }
}
