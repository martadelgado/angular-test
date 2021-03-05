import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxsModule} from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoatTypeComponent } from './boat-type/boat-type.component';
import { BoatSettingsComponent } from './boat-settings/boat-settings.component';
import { BoatSubmitComponent } from './boat-submit/boat-submit.component';
import { BoatOwnerComponent } from './boat-owner/boat-owner.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BoatHomeComponent } from './boat-home/boat-home.component';
import {BoatState} from './boat/boat.state';
import {BoatCreationState} from './boat-creation/boat-creation.state';
import { ButtonComponent } from './button/button.component';
import { ButtonBackComponent } from './button-back/button-back.component';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BoatTypeComponent,
    BoatSettingsComponent,
    BoatSubmitComponent,
    BoatOwnerComponent,
    BoatHomeComponent,
    ButtonComponent,
    ButtonBackComponent,
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([BoatState, BoatCreationState]),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
