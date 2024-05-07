import { Component, OnInit } from '@angular/core';
import { IonHeader } from "@ionic/angular/standalone";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../button/button.module';
import {  HttpClientModule } from '@angular/common/http';
import { Tab2Service } from './tab2.service';


@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule
  ],
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [Tab2Service]
})
export class Tab2Page {
  constructor(private imageService: Tab2Service) { }
  imagePlayer: any;
  imageProfile: any;
  logo: any;
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
  
  handelSubmit(){
  const formData = new FormData();
        formData.append('imagePlayer', this.imagePlayer);
        formData.append('imageProfile', this.imageProfile);
        formData.append('logo', this.logo);
        formData.append('name', this.infoPlayer.get("name")?.value ?? '');
        formData.append('position',this.infoPlayer.get("position")?.value ?? '');
        formData.append('clubName', this.infoPlayer.get("clubName")?.value ?? '');
        formData.append('height', this.infoPlayer.get("height")?.value ?? '');
        formData.append('weight', this.infoPlayer.get("weight")?.value ?? '');
        formData.append('buts', this.infoPlayer.get("buts")?.value ?? '' );
        formData.append('matches', this.infoPlayer.get("matches")?.value ?? '' );
        formData.append('assists', this.infoPlayer.get("assists")?.value ?? '' );
        formData.append('age', this.infoPlayer.get("age")?.value ?? '');
    
      this.imageService.addPlayer(formData).subscribe((res)=>{
        console.log(res);
      })
  };
  imageProfiles(event:any){
    this.imageProfile = event.target.files[0];
  }
  imagePlayers(event:any){
    this.imagePlayer = event.target.files[0];
  }
  logos(event:any){
    this.logo = event.target.files[0];
  }
}
