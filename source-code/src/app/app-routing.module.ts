import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavComponent } from './global/nav/nav.component';
import { HomeComponent } from './home/home/home.component';
import { ProfileComponent } from './profile/profile/profile.component';

const homeRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
];

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: NavComponent, children: homeRoutes },
    { path: '**', redirectTo: '/', pathMatch: 'full' }, // 这个要放在最后，换句话说，在他之后的路由配置都是无效的
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }