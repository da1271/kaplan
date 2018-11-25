import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClassesService } from './classes.service'

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GroupByDatePipe } from './group-by-date.pipe';
import { ClassListComponent } from './class-list/class-list.component';
import { ClassListItemComponent } from './class-list-item/class-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupByDatePipe,
    ClassListComponent,
    ClassListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ClassesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
