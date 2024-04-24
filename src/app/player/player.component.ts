import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent  implements OnInit {

  constructor() { }
 imagurl2="assets/icon/549 1.png";
 TeamName="Barcelona";
 Name="Lionel Messi";
 position="Attack - Right Winger";
 but="30";
 imageurl3="assets/icon/Lionel-Messi 1.png";
  ngOnInit() {}

}
