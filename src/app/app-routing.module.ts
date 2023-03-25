import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeicoliComponent } from './components/veicoli/veicoli.component';
import { VenditeComponent } from './components/vendite/vendite.component';

const routes: Routes = [
  {path: '', redirectTo: 'veicoli', pathMatch: 'full'},
  {path: 'veicoli', component: VeicoliComponent},
  {path: 'vendite', component: VenditeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
