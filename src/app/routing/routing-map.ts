import { Routes } from "@angular/router";
import { IndkomsttypeComponent } from "../components/indkomsttype/indkomsttype.component";
import { RouterModule } from "@angular/router/src/router_module";
import { IntroComponent } from '../components/intro/intro.component';
import { LandvalgComponent } from "../components/landvalg/landvalg.component";
import { PeriodeComponent } from "../components/periode/periode.component";
import { ArbejdsgiverComponent } from '../components/arbejdsgiver/arbejdsgiver.component';
import { DiverseComponent } from "../components/diverse/diverse.component";
import { Betingelser33AComponent } from '../components/betingelser33-a/betingelser33-a.component';
import { OpholdiLandOver183dageComponent } from "../components/opholdi-land-over183dage/opholdi-land-over183dage.component";
import { IndkomstSkatteForholdComponent } from "../components/indkomst-skatte-forhold/indkomst-skatte-forhold.component";
import { AktieindkomstComponent } from "../components/aktieindkomst/aktieindkomst.component";
import { SimpleConclusionComponent } from '../components/simple-conclusion/simple-conclusion.component';
import { OneConclusionComponent } from "../components/one-conclusion/one-conclusion.component";
import { IntOrgIndkomstTypeComponent } from '../components/int-org-indkomst-type/int-org-indkomst-type.component';
import { PensionTypeComponent } from "../components/pension-type/pension-type.component";
import { PensionComplexComponent } from '../components/pension-complex/pension-complex.component';
import { IntOrgComponent } from '../components/int-org/int-org.component';
import { IntOrgIncomeTypeComponent } from '../components/int-org-income-type/int-org-income-type.component';

export const routes: Routes = [{
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    component: IntroComponent
  },
  {
    path: 'type',
    component: IndkomsttypeComponent
  },
  {
    path: 'land',
    component: LandvalgComponent
  },
  {
    path: 'periode',
    component: PeriodeComponent
  },
  {
    path: 'arbejdsgiver',
    component: ArbejdsgiverComponent
  },
  {
    path: 'diverse',
    component: DiverseComponent
  },
  {
    path: 'betingelse33A',
    component: Betingelser33AComponent
  },
  {
    path: 'opholdOver183dage',
    component: OpholdiLandOver183dageComponent
  },
  {
    path: 'indkomstSkatteForhold',
    component: IndkomstSkatteForholdComponent
  },
  {
    path: 'aktieindkomst',
    component: AktieindkomstComponent
  },
  {
    path: 'simpleConclusion',
    component: SimpleConclusionComponent
  },
  {
    path: 'simplicity',
    component: OneConclusionComponent
  },
  {
    path: 'incometype',
    component: IntOrgIndkomstTypeComponent
  },
  {
    path: 'pensionType',
    component: PensionTypeComponent
  },
  {
    path: 'PensionComplex',
    component: PensionComplexComponent
  },
  {
    path: 'InternationalOrg',
    component: IntOrgComponent
  },
  {
    path: 'InternationalOrgType',
    component: IntOrgIncomeTypeComponent
  }




];

