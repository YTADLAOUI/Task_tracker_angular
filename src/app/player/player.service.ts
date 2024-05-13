import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient) { }

  getAllPlayers(): Observable<any> {
    return this.http.get(environment.apiUrl+"/player");
  }
  searchPlayers(searchQuery:string): Observable<any> {
    console.log(searchQuery, "searching for players");
    return this.http.post(environment.apiUrl+"/player/search", {name: searchQuery}).pipe(
      shareReplay()
    );
  }
}
