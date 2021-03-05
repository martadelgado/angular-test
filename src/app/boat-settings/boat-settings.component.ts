import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BoatAction} from '../boat/boat.actions';
import {Select, Store} from '@ngxs/store';
import {BoatCreationAction} from '../boat-creation/boat-creation.actions';
import {BoatCreationState} from '../boat-creation/boat-creation.state';
import {Observable} from 'rxjs';
import {BoatTypeModel} from '../models/boat-type.model';

@Component({
  selector: 'app-boat-settings',
  templateUrl: './boat-settings.component.html',
  styleUrls: ['./boat-settings.component.scss']
})
export class BoatSettingsComponent implements OnInit {
  @Select(BoatCreationState.getBoatType) boatType$!: Observable<string>;

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
