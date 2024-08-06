import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent implements OnInit {

  agents: Observable<string>;
  agentsName: string;

  ngOnInit(): void{
    this.agents= new Observable(
      function(observer){
        try{
          observer.next('Ram');
          setInterval(()=>{
            observer.next('Mark');
          }, 3000)

          setInterval(()=>{
            observer.next('Sita');
          }, 6000);
         
        } catch (e){
          observer.error(e)
        }
      }
    );

    this.agents.subscribe(data =>{
      this.agentsName=data;
      
    })
  }
}
