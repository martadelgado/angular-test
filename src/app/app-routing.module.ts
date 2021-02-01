import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoatOwnerComponent} from './boat-owner/boat-owner.component';
import {BoatTypeComponent} from './boat-type/boat-type.component';
import {BoatSettingsComponent} from './boat-settings/boat-settings.component';
import {BoatSubmitComponent} from './boat-submit/boat-submit.component';
import {BoatHomeComponent} from './boat-home/boat-home.component';


const routes: Routes = [
  { path: '', component: BoatHomeComponent },
  { path: 'boat/1', component: BoatOwnerComponent },
  { path: 'boat/2', component: BoatTypeComponent },
  { path: 'boat/3', component: BoatSettingsComponent },
  { path: 'boat/submit', component: BoatSubmitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
