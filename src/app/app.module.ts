import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { CadastroPetComponent } from './components/cadastro-pet/cadastro-pet.component';

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
    LoginComponent,
    CadastroComponent,
    CadastroPetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
