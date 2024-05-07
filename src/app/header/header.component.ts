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
  Search$!: Observable<string>;
  constructor(private store: Store<{ search:string  }>) {
    this.Search$ = this.store.select('search');
  }
imageUrl="assets/icon/Vector.png"
imageUrl1="assets/icon/ri_search-line.png"
  ngOnInit() {
   
  }
  
  displayValue=()=>{
    console.log(this.SearchValue)
    this.store.dispatch(getSearch({search:this.SearchValue}))



    console.log(this.Search$,"searVVch");
    this.Search$.subscribe(value=>{
      if (value) { 
        console.log(value, "Search value from store");
      } else {
        console.log("Search value is empty");
      }
    });
  }
}
