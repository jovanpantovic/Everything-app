import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThingDetailComponent } from './things/thing-detail/thing-detail.component';
import { ThingsListComponent } from './things/things-list/things-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'things', pathMatch: 'full' },
  { path: 'things', component: ThingsListComponent },
  { path: 'things/:id', component: ThingDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
