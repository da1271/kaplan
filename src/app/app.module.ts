import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClassesService } from './services/classes.service'

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material'
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {DemoMaterialModule} from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GroupByDatePipe } from './pipes/group-by-date.pipe';
import { ClassListComponent } from './class-list/class-list.component';
import { ClassListItemComponent, DialogComponent } from './class-list-item/class-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    GroupByDatePipe,
    ClassListComponent,
    ClassListItemComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    DemoMaterialModule,
    BrowserAnimationsModule
  ],
  entryComponents: [ClassListItemComponent, DialogComponent],
  providers: [ClassesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
