import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassListItemComponent, DialogComponent } from './class-list-item.component';
import { GroupByDatePipe } from '../pipes/group-by-date.pipe';

import { MatDialogModule } from '@angular/material'

describe('ClassListItemComponent', () => {
  let component: ClassListItemComponent;
  let fixture: ComponentFixture<ClassListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassListItemComponent, DialogComponent, GroupByDatePipe ],
      imports: [ MatDialogModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
