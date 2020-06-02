import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MotosListComponent } from './components/motos-list/motos-list.component';

// Services
import { MotosService } from './services/motos.service';
import { MotoFormComponent } from './components/moto-form/moto-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MotosListComponent,
    MotoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MotosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
