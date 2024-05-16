import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonHeader } from "@ionic/angular/standalone";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from '../button/button.module';
import {  HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Tab2Service } from './tab2.service';
import { EMPTY, Subject, catchError, take, takeUntil } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
// import { ButtonModule } from 'primeng/button'; 


@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    ToastModule,
  ],
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [Tab2Service,MessageService]
})
export class Tab2Page implements OnInit , OnDestroy {
  constructor(private imageService: Tab2Service,private fb: FormBuilder,private router:Router,private messageService: MessageService) { 
    this.createForm();
  }
  imagePlayer: any;
  imageProfile: any;
  logo: any;
  infoPlayer!:FormGroup;
  destroy$ = new Subject<boolean>();
  createForm(){
    this.infoPlayer = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      position: ['', Validators.required],
      clubName: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      buts: ['', Validators.required],
      matches: ['', Validators.required],
      assists: ['', Validators.required],
      age: ['', Validators.required],
    })
  };
  ngOnInit() {
    console.log("hello");
  }
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
            if(this.infoPlayer.invalid){
              this.messageService.add({severity:'error', summary:'Error', detail:'Please fill all the fields'});
              return;
            }
      this.imageService.addPlayer(formData).pipe(
        take(1),
        takeUntil(this.destroy$),
        catchError((error: HttpErrorResponse) => {
          console.error('Error fetching Players:', error);
          return EMPTY;
        })
      ).subscribe((res)=>{
        console.log(res);
        // this.router.navigate(['/other-page']);
        this.messageService.add({severity:'success', summary:'Success', detail:'Player added successfully'});
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

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
