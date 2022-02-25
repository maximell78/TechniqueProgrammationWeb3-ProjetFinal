import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForfaitcaraibeComponent } from './forfaitcaraibe/forfaitcaraibe.component';
import { ForfaiteuropeComponent } from './forfaiteurope/forfaiteurope.component';
import { AproposComponent } from './apropos/apropos.component';
import { AccueilComponent } from './accueil/accueil.component';
import { StatsComponent } from './stats/stats.component';
import { TableForfaitsComponent } from './table-forfaits/table-forfaits.component';

const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'caraibe', component: ForfaitcaraibeComponent },
  { path: 'europe', component: ForfaiteuropeComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'administration', component: TableForfaitsComponent},  
  { path: 'stats', component: StatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
