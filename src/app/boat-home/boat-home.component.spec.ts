import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatHomeComponent } from './boat-home.component';

describe('BoatHomeComponent', () => {
  let component: BoatHomeComponent;
  let fixture: ComponentFixture<BoatHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
