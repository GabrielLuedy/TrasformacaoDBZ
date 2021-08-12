import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GokuSSComponent } from './goku-ss.component';

describe('GokuSSComponent', () => {
  let component: GokuSSComponent;
  let fixture: ComponentFixture<GokuSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GokuSSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GokuSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
