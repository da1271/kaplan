import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassListComponent } from './class-list.component';
import { ClassListItemComponent, DialogComponent } from '../class-list-item/class-list-item.component';
import { GroupByDatePipe } from '../pipes/group-by-date.pipe';
import { HttpClientModule } from '@angular/common/http';

describe('ClassListComponent', () => {
  let component: ClassListComponent;
  let fixture: ComponentFixture<ClassListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClassListComponent,
        GroupByDatePipe,
        ClassListItemComponent,
        DialogComponent
       ],
       imports: [
        HttpClientModule,
    ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
