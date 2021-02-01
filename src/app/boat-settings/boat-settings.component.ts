import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Boat} from '../boat';
import {BoatAction} from '../boat/boat.actions';
import {Store} from '@ngxs/store';
import {BoatCreationAction} from '../boat-creation/boat-creation.actions';

@Component({
  selector: 'app-boat-settings',
  templateUrl: './boat-settings.component.html',
  styleUrls: ['./boat-settings.component.scss']
})
export class BoatSettingsComponent implements OnInit {
  boatForm = new FormGroup({
    length: new FormControl('', Validators.maxLength(3)),
    width: new FormControl('', Validators.maxLength(3)),
    draught: new FormControl('', Validators.maxLength(3)),
    foil: new FormControl(),
    equipment: new FormControl(),
    annex: new FormControl(),
  });
  buttonText = 'Next';
  isSail = true;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  addToForm(): void {
    this.store.dispatch(new BoatCreationAction.AddSettings(this.boatForm.value));
    console.log('3', this.store.snapshot());
  }

}
