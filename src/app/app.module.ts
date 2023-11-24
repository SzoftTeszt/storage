import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../enviroments';

import { PdfViewerModule } from 'ng2-pdf-viewer'; // <- import PdfViewerModule



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadDetailsComponent } from './upload-details/upload-details.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { UploadListComponent } from './upload-list/upload-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PdfViewComponent } from './pdf-view/pdf-view.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadDetailsComponent,
    UploadFormComponent,
    UploadListComponent,
    PdfViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    NgbModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
