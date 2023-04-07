import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitApplicationPageComponent } from './submit-application-page.component';

describe('SubmitApplicationPageComponent', () => {
  let component: SubmitApplicationPageComponent;
  let fixture: ComponentFixture<SubmitApplicationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitApplicationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitApplicationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
