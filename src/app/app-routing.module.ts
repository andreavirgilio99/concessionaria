import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessComponent } from './components/access/access.component';
import { VeicoliComponent } from './components/veicoli/veicoli.component';
import { VenditeComponent } from './components/vendite/vendite.component';

const routes: Routes = [
  {path: '', redirectTo: 'veicoli', pathMatch: 'full'},
  {path: 'veicoli', component: VeicoliComponent},
  {path: 'vendite', component: VenditeComponent},
  {path: 'access', component: AccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
