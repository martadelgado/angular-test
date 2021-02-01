import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatTypeComponent } from './boat-type.component';

describe('BoatTypeComponent', () => {
  let component: BoatTypeComponent;
  let fixture: ComponentFixture<BoatTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
