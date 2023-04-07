import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdScholarshipPageComponent } from './third-scholarship-page.component';

describe('ThirdScholarshipPageComponent', () => {
  let component: ThirdScholarshipPageComponent;
  let fixture: ComponentFixture<ThirdScholarshipPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdScholarshipPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdScholarshipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
