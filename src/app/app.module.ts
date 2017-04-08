import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SearchBarResultComponent } from './search-bar-result/search-bar-result.component';
import { SearchBarResultItemComponent } from './search-bar-result-item/search-bar-result-item.component';
import {ModuleComponent} from './module/module.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultPageComponent } from './search-result-page/search-result-page.component';
import { DocListComponent } from './doc-list/doc-list.component';
import { DocListSectionComponent } from './doc-list-section/doc-list-section.component';
import { DocListItemComponent } from './doc-list-item/doc-list-item.component';
import { ModuleNavItemComponent } from './module-nav-item/module-nav-item.component';
import {DocServiceService} from "./doc-service.service";
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchedDocListComponent } from './searched-doc-list/searched-doc-list.component';
import { SearchedDocListItemComponent } from './searched-doc-list-item/searched-doc-list-item.component';
import { SearchResultPageItemComponent } from './search-result-page-item/search-result-page-item.component';


const appRoutes: Routes = [
  {
    path: 'main', component: MainComponent
  },
  {
    path: 'module/:id', component: ModuleComponent
  },
  {
    path: 'search', component: SearchResultPageComponent
  },
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchBarResultComponent,
    SearchBarResultItemComponent,
    ModuleComponent,
    SearchResultPageComponent,
    DocListComponent,
    DocListSectionComponent,
    DocListItemComponent,
    ModuleNavItemComponent,
    SearchBarComponent,
    SearchedDocListComponent,
    SearchedDocListItemComponent,
    SearchResultPageItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DocServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
