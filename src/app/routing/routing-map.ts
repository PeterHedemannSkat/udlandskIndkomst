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
  }

];

