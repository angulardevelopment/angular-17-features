import { Routes } from '@angular/router';
import { PerfComponent } from './perf/perf.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';

export const routes: Routes = [
  {path:'PerfComponent', component: PerfComponent},
  {path:'ControlFlowComponent', component: ControlFlowComponent}
];
