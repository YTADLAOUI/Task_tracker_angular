import { Component } from '@angular/core';
import { IonHeader } from "@ionic/angular/standalone";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ButtonModule } from '../button/button.module';


// import { Tab2PageRoutingModule } from './tab2-routing.module';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  infoPlayer = new FormGroup({
    name: new FormControl(''),
    position: new FormControl(''),
    clubName: new FormControl(''),
    height: new FormControl(''),
    weight: new FormControl(''),
    buts: new FormControl(''),
    matches: new FormControl(''),
    assists: new FormControl(''),
    age: new FormControl(''),
  })
  constructor() {}
  handelSubmit(){
      console.log(this.infoPlayer.value);
      
  };
}
