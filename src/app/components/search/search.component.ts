import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, take, takeWhile } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
searchForm: FormGroup;
name: FormControl;

constructor(private Fb: FormBuilder){

}

ngOnInit(): void {
  this.searchForm = new FormGroup({
    name: new FormControl('start search')
    
  });

  this.searchForm.get('name').valueChanges.
  pipe(
    // take(2),
    takeWhile((v) => this.checkCondition(v)),
    debounceTime(3000)
  ).subscribe(data=>{
    console.log(data);
    
  })

}

checkCondition(value){
  return value.length >5? false : true;
}

readValue(){ 
}
}
