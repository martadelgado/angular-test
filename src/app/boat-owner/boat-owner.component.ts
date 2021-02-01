import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Store} from '@ngxs/store';

import {BoatCreationAction} from '../boat-creation/boat-creation.actions';
import {BOATS} from '../../mock-boats';
import {Router} from '@angular/router';

@Component({
  selector: 'app-boat-owner',
  templateUrl: './boat-owner.component.html',
  styleUrls: ['./boat-owner.component.scss']
})
export class BoatOwnerComponent implements OnInit {
  id = BOATS.length + 1;
  ownerTypes = ['Professional', 'Particular'];
  boatForm = new FormGroup({
    id: new FormControl(0),
    ownerType: new FormControl('', Validators.required),
  });
  buttonText = 'Suivant';
  showError = false;

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
  }

  addToForm(): void {
    if (this.boatForm.valid) {
      this.showError = false;
      this.router.navigate(['/boat/2']);
      this.store.dispatch(new BoatCreationAction.AddOwner(this.boatForm.value));
    } else {
      this.showError = true;
    }
  }
}
