import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThingDetailComponent } from './things/thing-detail/thing-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThingService } from './things/thing.service';
import { ThingsListComponent } from './things/things-list/things-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ThingDetailComponent,
    ThingsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ThingService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
