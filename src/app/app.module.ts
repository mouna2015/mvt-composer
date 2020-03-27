import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfficherMvtComponent } from './afficher-mvt/afficher-mvt.component';
import { AffichageService } from './affichage.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    AfficherMvtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AffichageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
