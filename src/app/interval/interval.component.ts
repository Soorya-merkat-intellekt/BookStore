import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit,OnDestroy {
  intervalsubscript:Subscription;

  constructor() { }

  ngOnInit(): void {
    this.intervalsubscript=interval(1000).subscribe(count =>
      console.log(count)
     );
  }
  ngOnDestroy(): void {
    this.intervalsubscript.unsubscribe();
  }



  
 


}
