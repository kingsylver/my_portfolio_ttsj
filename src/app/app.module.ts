import { DataApiService } from './services/http/data-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { LinkifyPipe } from './pipes/linkify.pipe';
import { CvNavBarComponent } from './cv-nav-bar/cv-nav-bar.component';
import { CvAppComponent } from './pages/cv-app/cv-app.component';
import { NgxPrintModule } from 'ngx-print';
import { HighlightSearchPipe } from './pipes/highlight-search.pipe';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    LinkifyPipe,
    CvNavBarComponent,
    CvAppComponent,
    HighlightSearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PdfViewerModule,
    NgxPrintModule
  ],
  providers: [
    DataApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
