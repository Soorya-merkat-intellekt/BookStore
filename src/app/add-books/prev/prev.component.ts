import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prev',
  templateUrl: './prev.component.html',
  styleUrls: ['./prev.component.css']
})
export class PrevComponent implements OnInit {
@Input() img=''
  constructor() {}

  ngOnInit(): void {
  }

}
