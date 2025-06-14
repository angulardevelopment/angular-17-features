import { Routes } from '@angular/router';
import { PerfComponent } from './perf/perf.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { ImmutableComponent } from './immutable/immutable.component';
import { LargeComponent } from './large/large.component';
import { SecurityComponent } from './security/security.component';

export const routes: Routes = [
  {path:'PerfComponent', component: PerfComponent},
  {path:'ControlFlowComponent', component: ControlFlowComponent},
  {path:'ImmutableComponent', component: ImmutableComponent},
  {path:'LargeComponent', component: LargeComponent},
  {path:'SecurityComponent', component: SecurityComponent},
  {path:'DemoComponent', loadComponent: () => import('./demo/demo.component').then(m => m.DemoComponent) },
];
