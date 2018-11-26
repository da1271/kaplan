import { Component, OnInit } from '@angular/core';
import { ClassesService } from './services/classes.service';
import { IClass } from './class'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  classes: IClass[] = [];
  newArray: any = [];
  constructor(private classesService: ClassesService) {}

  ngOnInit() {
    this.classesService
      .getClasses()
      .subscribe(
        (data: any) => {
          this.classes = data.classes;
          this.newArray = [];
          var m = this.classes;
          for (var _i = 0; _i < m.length; _i++) {
            this.newArray.push({                                                 //creates new array of objects that include separate date & time for pipe
             classes: m[_i],
             date: this.classes[_i].time.substring(0, 10),                        // eg. 11-22-2016
             time: this.classes[_i].time.substring(11, 19)                        // eg. 22:00:00
            });
          } 
        })
  }

}
