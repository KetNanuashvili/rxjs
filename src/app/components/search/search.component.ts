import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { count, debounceTime, distinct, elementAt, filter, first, from, last, max, min, Observable, of, skip, take, takeLast, takeWhile } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
searchForm: FormGroup;
name: FormControl;

categories = ['Mobiles', 'Chargers', 'TV', 'Some', 'Chargers', 'Headphones', 'TV'];
category$: Observable<string>=from(this.categories);

ranks =[1, 65,3, 89, 100, 400,6738, 10,5,90];

rank$: Observable<number> = from (this.ranks);

constructor(private Fb: FormBuilder){

}

ngOnInit(): void {
  this.searchForm = new FormGroup({
    name: new FormControl('start search')
    
  });

  this.searchForm.get('name').valueChanges.
  pipe(

    filter((v) => this.checCharCount((v))
  )
    // take(2), take N values
    // takeWhile((v) => this.checkCondition(v)), take values till a condition  is true


    // debounceTime(3000)
  ).subscribe(data=>{
    console.log(data);

    this.rank$.pipe(
      // distinct(),

      filter((value) =>this.filterNumber(value)),
      // max()

      min()
    ).subscribe(data3=>{
      // console.log('Max value is ' + data3);
      console.log('Min value is ' + data3);
      
    })


    this.category$
    .pipe(
      distinct(),
      skip(2),
      count()
    ).subscribe(data2 => {
      console.log(data2);
      
    })
    // this.category$.pipe( 
      //whereever you are sure about the data set, you need specific last emited values
      // takeLast(2)
      // first()
      // last()
    //   elementAt(3)
    // ).subscribe( data2 => {
    //   console.log(data2);
      
    // })
  })

}

filterNumber(v){
  // return v<20? false: true;
  return v > 30 ? false : true;
}

checCharCount(v){
  return v.length <10? true: false;
}

checkCondition(value){
  return value.length >5? false : true;
}

readValue(){ 
}
}
