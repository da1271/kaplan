import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ClassListComponent } from './class-list/class-list.component';
import { ClassListItemComponent, DialogComponent } from './class-list-item/class-list-item.component';
import { GroupByDatePipe } from './pipes/group-by-date.pipe';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GroupByDatePipe,
        ClassListComponent,
        ClassListItemComponent,
        DialogComponent
      ],
      imports: [
       HttpClientModule,
   ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'kaplan'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('kaplan');
  // });
  //
  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to kaplan!');
  // });
});
