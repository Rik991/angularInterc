import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './main-components/navbar/navbar.component';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { ErrorIntercInterceptor } from './error-interc.interceptor';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [
    provideHttpClient(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorIntercInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
