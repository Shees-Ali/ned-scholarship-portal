import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthScholarshipPageComponent } from './fourth-scholarship-page.component';

describe('FourthScholarshipPageComponent', () => {
  let component: FourthScholarshipPageComponent;
  let fixture: ComponentFixture<FourthScholarshipPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthScholarshipPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthScholarshipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
