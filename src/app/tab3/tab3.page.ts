import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { HeaderModule } from '../header/header.module';
import { ButtonModule } from '../button/button.module';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Tab3Service } from './tab3.service';
import { Player } from '../player/player.inter';
import { EMPTY, Subject, catchError, take, takeUntil } from 'rxjs';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-tab3',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderModule,
    ButtonModule,
    HttpClientModule,
    RouterModule
  ],
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  providers: [Tab3Service]
})
export class Tab3Page implements OnInit , OnDestroy{
  imagurl3="assets/icon/messi.png";
  imagurl4="assets/icon/Group.png";
  imagurl5="assets/icon/performance.png";
  imagurl6="assets/icon/statique.png";
  imagurl7="assets/icon/trophies.png";
  id: string = '';
  data: Player = {} as Player;  
 destroy$= new Subject<boolean>() 
      constructor(private activatedRoute: ActivatedRoute, private tab3Service: Tab3Service) {
        this.id = this.activatedRoute.snapshot.paramMap.get('id') || '';
    }
    ngOnInit() {
      console.log(this.id);
      this.getPlayer(this.id);
    }
    getPlayer(id:string){
        this.tab3Service.getPlayerById(id).pipe(
            takeUntil(this.destroy$),
            take(1),
            catchError((error: HttpErrorResponse) => {
              console.error('Error fetching Players:', error);
              return EMPTY;
            })
        ).subscribe((response) => {
          this.data = response;
          console.log(this.data);
        })
    }

    ngOnDestroy(): void {
      this.destroy$.next(true);
      this.destroy$.unsubscribe();
    }

}
