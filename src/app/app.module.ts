import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule,MatTooltipModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSnackBarModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MyTableComponent } from './my-table/my-table.component';
import { ReportePorCiaComponent } from './reporte-por-cia/reporte-por-cia.component';
import { ReportePorIncidenciaComponent } from './reporte-por-incidencia/reporte-por-incidencia.component';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';
import { SnackBarDemoComponent } from './snack-bar-demo/snack-bar-demo.component';

const appRoutes: Routes = [
  {path: 'reporte-por-cia', component: ReportePorCiaComponent},
  {path: 'reporte-por-incidencia',component: ReportePorIncidenciaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyDashboardComponent,
    MyTableComponent,
    ReportePorCiaComponent,
    ReportePorIncidenciaComponent,
    DialogDemoComponent,
    MyDialogComponent,
    TooltipDemoComponent,
    SnackBarDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule
  ],
  entryComponents: [
    MyDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
