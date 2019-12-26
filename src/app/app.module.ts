import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { RecordListComponent } from './page/record-list/record-list.component';
import { HeaderComponent } from './component/header/header.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'records', component: RecordListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecordListComponent,
    HeaderComponent
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
