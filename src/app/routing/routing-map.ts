import { Routes } from "@angular/router";
import { IndkomsttypeComponent } from "../components/indkomsttype/indkomsttype.component";
import { RouterModule } from "@angular/router/src/router_module";
import { IntroComponent } from '../components/intro/intro.component';
import { LandvalgComponent } from "../components/landvalg/landvalg.component";
import { PeriodeComponent } from "../components/periode/periode.component";

export const routes: Routes = [{
    path: '',
    redirectTo: 'land',
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
  }

];

