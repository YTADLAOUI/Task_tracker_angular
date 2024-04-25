import { Component, Input, OnInit, } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent  implements OnInit {
  search='';

  constructor() { }
imageUrl="assets/icon/Vector.png"
imageUrl1="assets/icon/ri_search-line.png"
  ngOnInit() {
   
  }
  
  displayValue=()=>{
    console.log(this.search)
  }
}
