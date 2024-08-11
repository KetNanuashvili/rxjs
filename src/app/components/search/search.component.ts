import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, first, from, last, Observable, of, take, takeLast, takeWhile } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
searchForm: FormGroup;
name: FormControl;

categories = ['Mobiles', 'TV', 'Chargers', 'Headphones'];
category$: Observable<string>=from(this.categories);
constructor(private Fb: FormBuilder){

}

ngOnInit(): void {
  this.searchForm = new FormGroup({
    name: new FormControl('start search')
    
  });

  this.searchForm.get('name').valueChanges.
  pipe(
    // take(2), take N values
    // takeWhile((v) => this.checkCondition(v)), take values till a condition  is true


    debounceTime(3000)
  ).subscribe(data=>{
    console.log(data);

    this.category$.pipe( //whereever you are sure about the data set, you need specific last emited values
      // takeLast(2)
      // first()
      last()
    ).subscribe( data2 => {
      console.log(data2);
      
    })
  })

}

checkCondition(value){
  return value.length >5? false : true;
}

readValue(){ 
}
}
