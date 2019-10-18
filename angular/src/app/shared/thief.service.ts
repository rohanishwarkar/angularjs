import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Thief } from './thief.model';

@Injectable()
export class ThiefService {
  selectedThief: Thief;
  thieves: Thief[];
  readonly baseURL = 'http://localhost:3000/thieves';

  constructor(private http: HttpClient) { }

  postThief(th: Thief) {
    return this.http.post(this.baseURL, th);
  }

  getThiefList() {
    return this.http.get(this.baseURL);
  }

  putThief(th: Thief) {
    return this.http.put(this.baseURL + `/${th._id}`, th);
  }

  deleteThief(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
