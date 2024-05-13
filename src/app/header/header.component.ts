import { Component, Input, OnInit, } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getSearch } from '../features/search/search.actions';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent  implements OnInit {
  SearchValue='';
  constructor(private store: Store<{ search:string  }>) {
  }
imageUrl="assets/icon/Vector.png"
imageUrl1="assets/icon/ri_search-line.png"
  ngOnInit() {
   
  }
  
  displayValue=()=>{
    // console.log(this.SearchValue)
    this.store.dispatch(getSearch({search:this.SearchValue}))
  }
}
