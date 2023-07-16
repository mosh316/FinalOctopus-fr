import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FrhttpserviceService } from 'src/app/services/frhttpservice.service';

import { FruitsListComponent } from './components/fruits-list/fruits-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  
  ],
  providers: [FrhttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
