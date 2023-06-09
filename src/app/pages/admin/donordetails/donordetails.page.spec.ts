import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonordetailsComponent } from './donordetails.component';

describe('DonordetailsComponent', () => {
  let component: DonordetailsComponent;
  let fixture: ComponentFixture<DonordetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonordetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
