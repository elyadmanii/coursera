import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private url: string = "http://localhost:5000/"
  private userUrl: string = this.url + 'course';

  constructor(private http: HttpClient) { }

  getAllCoures(): Observable<any> {
    return this.http.get(this.userUrl);
  }
}
