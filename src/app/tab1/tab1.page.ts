import { Component } from '@angular/core';
import { Tab1Service } from './tab1.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private tab1Service: Tab1Service) {}

  ionViewWillEnter() {
    this.tab1Service.getAllPlayers().subscribe();
  }
}
