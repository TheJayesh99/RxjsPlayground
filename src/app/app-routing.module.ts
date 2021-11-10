import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { OfFromComponent } from './of-from/of-from.component';

const routes: Routes = [
  { path:"fromevent",component:FromEventComponent },
  { path: "interval",component:IntervalComponent }, 
  { path: "ofFrom", component:OfFromComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
