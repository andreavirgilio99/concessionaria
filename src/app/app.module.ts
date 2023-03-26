import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VeicoliComponent } from './components/veicoli/veicoli.component';
import { DettagliVeicoloComponent } from './components/dettagli-veicolo/dettagli-veicolo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { VenditeComponent } from './components/vendite/vendite.component';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { AccessComponent } from './components/access/access.component';

@NgModule({
  declarations: [
    AppComponent,
    VeicoliComponent,
    DettagliVeicoloComponent,
    HeaderComponent,
    VenditeComponent,
    AccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    NgxMaskModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
