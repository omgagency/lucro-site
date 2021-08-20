import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgwWowModule } from 'ngx-wow';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { QueesComponent } from './pages/quees/quees.component';
import { ComoComponent } from './pages/como/como.component';
import { ComunidadComponent } from './pages/comunidad/comunidad.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'https://analytics-streaming-5nre6opcba-uc.a.run.app', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    QueesComponent,
    ComoComponent,
    ComunidadComponent,
    LoginComponent,
    RegistroComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgwWowModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
