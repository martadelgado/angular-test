import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatSubmitComponent } from './boat-submit.component';

describe('BoatSubmitComponent', () => {
  let component: BoatSubmitComponent;
  let fixture: ComponentFixture<BoatSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
