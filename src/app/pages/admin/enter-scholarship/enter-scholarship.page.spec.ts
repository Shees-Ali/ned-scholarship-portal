import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterScholarshipComponent } from './enter-scholarship.component';

describe('EnterScholarshipComponent', () => {
  let component: EnterScholarshipComponent;
  let fixture: ComponentFixture<EnterScholarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterScholarshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterScholarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
