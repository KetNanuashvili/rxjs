import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';


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

  this.searchForm.get('name').valueChanges.pipe(
    debounceTime(3000)
  ).subscribe(data=>{
    console.log(data);
    
  })

}

readValue(){ 
}
}
