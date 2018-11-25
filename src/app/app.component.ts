import { Component, OnInit } from '@angular/core';
import { ClassesService } from './classes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  classes:any = []
  newArray:any = [];
  constructor(private classesService: ClassesService) {

  }
  ngOnInit() {
    this.classesService
      .getClasses()
      .subscribe(
        (data: any) => {
          this.classes = data.classes;
          this.newArray = [];
          var m = this.classes;
          for (var _i = 0; _i < m.length; _i++) {
            this.newArray.push({
             classes: m[_i],
             date: this.classes[_i].time.substring(0, 10),
             time: this.classes[_i].time.substring(11, 19)
            });
          }
        })
  }

}
