import { Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
import { from, fromEvent, interval, Observable, of } from 'rxjs';

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
  @ViewChild('validate')
  validate: ElementRef;

  @ViewChild('getLink')
  getLink:ElementRef;

  subjectsArray = ['math', 'history', 'music', 'geography', 'science'];
  subjectName : string;

  students: Observable <string[]> = of(this.studentsList);

  studentNames: Observable <string> = of ('keti');

  student$: Observable<any> = of(this.studentObj);


  subjects$: Observable<string> = from (this.subjectsArray);






  ngOnInit(): void{
    this.students.subscribe (data=>{
      console.log(data);
      
    });

    this.studentNames.subscribe (data=>{
      console.log(data);
      
    });

    this.student$.subscribe(data=>{
      console.log(data);
      
    })

    this.subjects$.subscribe(data=>{
      const seqNumber$= interval(1000);

      seqNumber$.subscribe(num =>{
        if(num < 5 ){
          console.log(data + num);
        }
       
        
      })


      
      // this.subjectName = data;
      
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

  rxJseventObservable(){
    const btnObservable$ = fromEvent(this.validate?.nativeElement, 'click')

    btnObservable$.subscribe(data=>{
      console.log(data);
      
    })
  }


  getEvenetObservable(){
    const aobservable$ = fromEvent(this.getLink?.nativeElement, 'mouseover');
    aobservable$.subscribe(data=>{
      
      console.log(data);
      
    })
  }
}