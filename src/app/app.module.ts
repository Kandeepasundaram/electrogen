import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DbService } from './services/coredb/dbservices';
import { NedbService } from './services/coredb/nedb/nedb.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: DbService, useClass: NedbService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
