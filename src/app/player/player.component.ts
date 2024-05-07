import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlayerService } from './player.service';
import { Player } from './player.inter';
import {
  catchError,
  EMPTY,
  map,
  Observable,
  Subject,
  Subscriber,
  Subscription,
  take,
  takeUntil,
} from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit, OnDestroy {
  constructor(private servicePlayer: PlayerService,private store: Store<{ search:string  }>) {
    this.Search$ = store.select('search');
  }
  
  Search$!: Observable<string>;
  imagurl2 = 'assets/icon/549 1.png';
  TeamName = 'Barcelona';
  Name = 'Lionel Messi';
  position = 'Attack - Right Winger';
  but = '30';
  imageurl3 = 'assets/icon/Lionel-Messi 1.png';
  value = 1;
  data: Player[] = [];
  destroy$ = new Subject<boolean>();
  ngOnInit() {
    this.loadPlayers();
  }
  
  loadPlayers(): void {
    this.servicePlayer
      .getAllPlayers()
      .pipe(
        take(1),
        takeUntil(this.destroy$),
        catchError((error: HttpErrorResponse) => {
          console.error('Error fetching Players:', error);
          return EMPTY;
        })
      )
      .subscribe((response) => {
        this.data = response;
        console.log('Players:', this.data);
      });

  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
