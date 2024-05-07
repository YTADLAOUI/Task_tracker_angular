import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

interface ImageData {
  secure_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class Tab2Service  {

  constructor( private http:HttpClient ) { }

  addPlayer(data: any): Observable<any> {
    console.log(
      data,'test'
    );
    return this.http.post(environment.apiUrl+"/player/add", data);
  }
 

    

}
