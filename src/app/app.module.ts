import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { RecordListComponent } from './page/record-list/record-list.component';
import { HeaderComponent } from './component/header/header.component';
import { ReversePipe } from './reverse.pipe';
import { RecordComponent } from './page/record/record.component';
import { ReportComponent } from './page/report/report.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'records', component: RecordListComponent},
  { path: 'report', component: ReportComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecordListComponent,
    HeaderComponent,
    ReversePipe,
    RecordComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
