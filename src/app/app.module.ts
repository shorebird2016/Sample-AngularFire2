import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { MdfComponent } from './mdf/mdf.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import {CompanyService} from './svc/company.service';
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {path: 'company', component: CompanyComponent },
  {path: 'rxjs', component: RxjsComponent },
  {path: 'mdf', component: MdfComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    MdfComponent,
    RxjsComponent,
    CompanyEditComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), FormsModule,
    FlexLayoutModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule,
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
