import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Tab1Service {
  constructor(private http: HttpClient) {}
   allPlayerSubject = new BehaviorSubject<any>(null);
  getAllPlayers(): Observable<any> {
    return this.http.get(environment.apiUrl + '/player').pipe(
      tap(res => {
        console.log(res, 'res');
        this.allPlayerSubject.next(res);
      })
    );
  }
}