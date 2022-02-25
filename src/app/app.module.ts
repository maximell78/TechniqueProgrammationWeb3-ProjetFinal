import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

import { ForfaitService } from './forfait.service';
import { MiniForfaitComponent } from './mini-forfait/mini-forfait.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { EtoilesComponent } from './etoiles/etoiles.component';
import { FormGestionComponent } from './form-gestion/form-gestion.component';
import { FormRechercheComponent } from './form-recherche/form-recherche.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AproposComponent } from './apropos/apropos.component';
import { ForfaiteuropeComponent } from './forfaiteurope/forfaiteurope.component';
import { ForfaitcaraibeComponent } from './forfaitcaraibe/forfaitcaraibe.component';
import { AccueilComponent } from './accueil/accueil.component';
import { EuropePipe } from './europe.pipe';
import { CaraibePipe } from './caraibe.pipe';
import { StatsComponent } from './stats/stats.component';
import { TableForfaitsComponent } from './table-forfaits/table-forfaits.component';
import { DialogFormForfaitsComponent } from './dialog-form-forfaits/dialog-form-forfaits.component';

@NgModule({
  declarations: [
    AppComponent,
    MiniForfaitComponent,
    ForfaitCompletComponent,
    EtoilesComponent,
    FormGestionComponent,
    FormRechercheComponent,
    HeaderComponent,
    FooterComponent,
    AproposComponent,
    ForfaiteuropeComponent,
    ForfaitcaraibeComponent,
    AccueilComponent,
    EuropePipe,
    CaraibePipe,
    StatsComponent,
    TableForfaitsComponent,
    DialogFormForfaitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    NgChartsModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    FormsModule
  ],
  providers: [ForfaitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
