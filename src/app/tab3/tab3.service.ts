import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Player } from '../player/player.inter';

@Injectable({
  providedIn: 'root'
})
export class Tab3Service {

  constructor(
    private http: HttpClient
  ) { }
getPlayerById(id: string):Observable<Player> {
    return this.http.get<Player>(environment.apiUrl + '/player/' + id);
}

}
