import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotosListComponent } from './motos-list.component';

describe('MotosListComponent', () => {
  let component: MotosListComponent;
  let fixture: ComponentFixture<MotosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
