import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThiefComponent } from './thief.component';

describe('ThiefComponent', () => {
  let component: ThiefComponent;
  let fixture: ComponentFixture<ThiefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThiefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThiefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
