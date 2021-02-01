import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatOwnerComponent } from './boat-owner.component';

describe('BoatNewComponent', () => {
  let component: BoatOwnerComponent;
  let fixture: ComponentFixture<BoatOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
