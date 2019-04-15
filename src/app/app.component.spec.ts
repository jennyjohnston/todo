import { TestBed, async } from '@angular/core/testing';
import { ToDoComponent } from './app.component';

describe('ToDoComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ToDoComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ToDoComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'todo'`, () => {
    const fixture = TestBed.createComponent(ToDoComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('todo');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(ToDoComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to todo!');
  });
});
