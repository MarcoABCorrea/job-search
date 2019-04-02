import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JobsService {

  constructor(private http: HttpClient) { }
  
  public getAllJobs(): Observable<any> {
    return this.http.get("./assets/jobs.json");
  }
}
