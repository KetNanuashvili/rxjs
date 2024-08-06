import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent implements OnInit {

  agents: Observable<string>;
  agentsName: string;
  studentsList = ['mark', 'ram', 'sita', 'lisa'];
  studentObj={
    id:10,
    name: 'Keti'
  }


  students: Observable <string[]> = of(this.studentsList);

  studentNames: Observable <string> = of ('keti');

  student$: Observable<any> = of(this.studentObj);

  // students: Observable <string[]> = of(['mark', 'ram', 'sita', 'lisa'])

  ngOnInit(): void{
    this.students.subscribe (data=>{
      console.log(data);
      
    });

    this.studentNames.subscribe (data=>{
      console.log(data);
      
    });

    this.student$.subscribe(data=>{
      console.log(data.id);
      
    })





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
