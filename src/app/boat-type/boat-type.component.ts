import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {Boat} from '../boat';
import {BoatCreationAction} from '../boat-creation/boat-creation.actions';
import {Store} from '@ngxs/store';
import {BOATS} from '../../mock-boats';
import {Router} from '@angular/router';

@Component({
  selector: 'app-boat-type',
  templateUrl: './boat-type.component.html',
  styleUrls: ['./boat-type.component.scss']
})
export class BoatTypeComponent implements OnInit {
  buttonText = 'Next';
  boatTypes = ['Voiler', 'Catamaran', 'Bateau moteur', 'Semi-rigide', 'Péniche', 'Jet-ski', 'Yacht'];
  boatForm = new FormGroup({
      type: new FormControl('', Validators.required),
    });
  showError = false;

  constructor(private store: Store, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {}

  addToForm(): void {
    if (this.boatForm.valid) {
      this.router.navigate(['/boat/submit']);
      if (this.boatForm.value.type === 'Voiler' || this.boatForm.value.type === 'Catamaran') {
        this.router.navigate(['/boat/3']);
      }
      this.store.dispatch(new BoatCreationAction.AddType(this.boatForm.value));
    } else {
      this.showError = true;
    }
  }
}
