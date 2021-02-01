import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSailboatComponent } from './boat-settings.component';

describe('SettingsSailboatComponent', () => {
  let component: SettingsSailboatComponent;
  let fixture: ComponentFixture<SettingsSailboatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsSailboatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsSailboatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
