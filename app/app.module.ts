import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GaleryComponent } from './pages/galery/galery.component';
import { BindRoteEvrntDirective } from './bind-rote-evrnt.directive';
import { ParentIsRouteActiveDirective} from './parent-is-route-active.directive';
import { DelayResolver } from './delay-resolver';

@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
    declarations: [AppComponent, HomeComponent, AboutComponent, GaleryComponent, BindRoteEvrntDirective, ParentIsRouteActiveDirective],
    bootstrap: [AppComponent],
    providers: [ DelayResolver ]
})
export class AppModule { }