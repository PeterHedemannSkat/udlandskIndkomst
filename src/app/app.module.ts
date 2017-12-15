import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { CalenderServices } from './sharedServices/dateServices';
import { MathCalc } from './sharedServices/math.services';

import { ExternalData } from './externalDataStore/dataStore';

import { Texts } from './textServices/testServices';
import { TxtSharedService } from './TxtSharedService/txtSharedService';

import { UrlRessourceService } from './urlRessource/urlressource';
import { JaNejComponent } from './sharedServices/ja-nej/ja-nej.component';
import { RadioButtonListComponent } from './sharedServices/radiobutton.skts';
import { ReadableDigitFormatDirective } from './sharedServices/numberInput';
import { TusindtalsSep } from './sharedServices/tusindtalssep';
import { ExcelTypeComponent } from './components/excel-type/excel-type.component';
import { FirstLetterToCapitalPipe } from './pipes/firstCapitalLetter';
import { StateService } from './state/stateContainer';



@NgModule({
  declarations: [
    AppComponent,
    JaNejComponent,
    RadioButtonListComponent,
    ReadableDigitFormatDirective,
    TusindtalsSep,
    ExcelTypeComponent,
    FirstLetterToCapitalPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  //, InMemoryWebApiModule.forRoot( ExternalData )
  ],
  providers: [
    Texts,
    TxtSharedService,
    UrlRessourceService,
    StateService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
