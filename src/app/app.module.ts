import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/home/nav-bar/nav-bar.component';
import { MainBannerComponent } from './components/home/main-banner/main-banner.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AboutComponent } from './components/home/about/about.component';
import { AdocaoComponent } from './components/adocao/adocao.component';
import { SecondaryNavBarComponent } from './components/shared/secondary-nav-bar/secondary-nav-bar.component';
import { TitleComponent } from './components/adocao/title/title.component';
import { PetsListComponent } from './components/adocao/pets-list/pets-list.component';
import { PqAdotarComponent } from './components/adocao/pq-adotar/pq-adotar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    MainBannerComponent,
    FooterComponent,
    AboutComponent,
    AdocaoComponent,
    SecondaryNavBarComponent,
    TitleComponent,
    PetsListComponent,
    PqAdotarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
