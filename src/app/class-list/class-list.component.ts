import { Component, OnInit, Input } from '@angular/core';
import { IClass } from '../class'

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {

  @Input()
  classes: IClass[];

  constructor() { }

  ngOnInit() {
  }

}
