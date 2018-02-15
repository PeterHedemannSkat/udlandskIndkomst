import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

/** Router */
import { RouterModule, Routes } from '@angular/router';
import { routes } from './routing/routing-map';

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

import { FirstLetterToCapitalPipe } from './pipes/firstCapitalLetter';
import { StateService } from './state/stateContainer';
import { ChosenComponent } from './chosen/chosen.component';
import { IndkomsttypeComponent } from './components/indkomsttype/indkomsttype.component';

import { IntroComponent } from './components/intro/intro.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { LandvalgComponent } from './components/landvalg/landvalg.component';
import { DatovaelgerInputFeltComponent } from './sharedServices/datePicker/datovaelger-input-felt.component';
import { PeriodeComponent } from './components/periode/periode.component';
import { PeriodsOf183Days } from './state/periode183Service';
import { PeriodState } from './state/periodClass';
import { RoutingService } from './routing/routingLogic';
import { ArbejdsgiverComponent } from './components/arbejdsgiver/arbejdsgiver.component';
import { CommonUdlandsService } from './servicesUdenlandskIndkomst/commonServices';
import { TxtStringReplacerService } from './textServices/txtSubReplacerService';
import { DiverseComponent } from './components/diverse/diverse.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { Betingelser33AComponent } from './components/betingelser33-a/betingelser33-a.component';
import { OpholdiLandOver183dageComponent } from './components/opholdi-land-over183dage/opholdi-land-over183dage.component';
import { PrintService } from './TxtSharedService/printServices';
import { TestService } from './testValues/testCases';
import { IndkomstSkatteForholdComponent } from './components/indkomst-skatte-forhold/indkomst-skatte-forhold.component';
import { SkatteForholdIndkomstService } from './servicesUdenlandskIndkomst/skatteTypeIndkomst';
import { BreadcrumComponent } from './components/breadcrum/breadcrum.component';
import { AktieindkomstComponent } from './components/aktieindkomst/aktieindkomst.component';
import { SimpleConclusionComponent } from './components/simple-conclusion/simple-conclusion.component';
import { FixComponent } from './components/breadcrum/fix/fix.component';
import { AktieSkatteTypeService } from './servicesUdenlandskIndkomst/aktierSkattetype';
import { KapitalIndkomstSkatteTypeService } from './servicesUdenlandskIndkomst/kapitalIndkomstSkatteType';
import { OneConclusionComponent } from './components/one-conclusion/one-conclusion.component';
import { IntOrgIndkomstTypeComponent } from './components/int-org-indkomst-type/int-org-indkomst-type.component';
import { PensionTypeComponent } from './components/pension-type/pension-type.component';
import { PensionComplexComponent } from './components/pension-complex/pension-complex.component';
import { PensionsSkatteTypeService } from './servicesUdenlandskIndkomst/pensionsSkattetype';
import { IntOrgComponent } from './components/int-org/int-org.component';
import { IntOrgIncomeTypeComponent } from './components/int-org-income-type/int-org-income-type.component';
import { IntOrgService } from './servicesUdenlandskIndkomst/intOrg';




@NgModule({
  declarations: [
    AppComponent,
    JaNejComponent,
    RadioButtonListComponent,
    ReadableDigitFormatDirective,
    TusindtalsSep,
    FirstLetterToCapitalPipe,
    ChosenComponent,
    IndkomsttypeComponent,
    IntroComponent,
    ButtonsComponent,
    LandvalgComponent,
    DatovaelgerInputFeltComponent,
    PeriodeComponent,
    ArbejdsgiverComponent,
    DiverseComponent,
    ProgressBarComponent,
    Betingelser33AComponent,
    OpholdiLandOver183dageComponent,
    IndkomstSkatteForholdComponent,
    BreadcrumComponent,
    AktieindkomstComponent,
    SimpleConclusionComponent,
    FixComponent,
    OneConclusionComponent,
    IntOrgIndkomstTypeComponent,
    PensionTypeComponent,
    PensionComplexComponent,
    IntOrgComponent,
    IntOrgIncomeTypeComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash: true})
    //, InMemoryWebApiModule.forRoot( ExternalData )
  ],
  providers: [
    Texts,
    TxtSharedService,
    UrlRessourceService,
    CalenderServices,
    StateService,
    PeriodsOf183Days,
    PeriodState,
    RoutingService,
    CommonUdlandsService,
    PrintService,
    TestService,
    SkatteForholdIndkomstService,
    AktieSkatteTypeService,
    KapitalIndkomstSkatteTypeService,
    PensionsSkatteTypeService,
    IntOrgService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
