import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstScholarshipPageComponent } from './first-scholarship-page.component';

describe('FirstScholarshipPageComponent', () => {
  let component: FirstScholarshipPageComponent;
  let fixture: ComponentFixture<FirstScholarshipPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstScholarshipPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstScholarshipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
