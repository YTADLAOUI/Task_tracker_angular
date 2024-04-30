import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { HeaderModule } from '../header/header.module';
import { ButtonModule } from '../button/button.module';
@Component({
  selector: 'app-tab3',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderModule,
    ButtonModule
  ],
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  imagurl3="assets/icon/messi.png";
  imagurl4="assets/icon/Group.png";
  imagurl5="assets/icon/performance.png";
  imagurl6="assets/icon/statique.png";
  imagurl7="assets/icon/trophies.png";

  constructor() {}

}
