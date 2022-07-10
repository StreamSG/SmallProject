import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './app-nav/dash/dash.component';
import { SearchComponent } from './app-nav/search/search.component';
import { SettingsComponent } from './app-nav/settings/settings.component';
import { LoggingComponent } from './shared/logging/logging.component';

const routes: Routes = [
  { path: '', component: SearchComponent},
  { path: 'dashboard', component: DashComponent},
  { path: 'search', component: SearchComponent},
  { path: 'log', component: LoggingComponent},
  { path: 'settings', component: SettingsComponent},
  { path: '**', component: DashComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
