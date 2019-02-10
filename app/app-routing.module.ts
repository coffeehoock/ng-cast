import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';



import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import {GaleryComponent} from './pages/galery/galery.component';


import { DelayResolver } from './delay-resolver';

export const routes: Routes = [
    { path: '', component: HomeComponent, resolve: [DelayResolver] },
    { path: 'about', component: AboutComponent, resolve: [DelayResolver] },
    { path: 'galery', component: GaleryComponent, resolve: [DelayResolver] }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    // providers: [ DelayResolver ]
})
export class AppRoutingModule {}

export const AppRouterModule: ModuleWithProviders = RouterModule.forRoot(routes);