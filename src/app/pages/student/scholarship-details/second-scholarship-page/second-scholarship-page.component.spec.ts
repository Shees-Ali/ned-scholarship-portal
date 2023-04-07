import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondScholarshipPageComponent } from './second-scholarship-page.component';

describe('SecondScholarshipPageComponent', () => {
  let component: SecondScholarshipPageComponent;
  let fixture: ComponentFixture<SecondScholarshipPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondScholarshipPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondScholarshipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
