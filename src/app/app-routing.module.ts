import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CpuListComponent } from './cpu-list/cpu-list.component';
import { SocketListComponent } from './socket-list/socket-list.component';
import { SocketDetailComponent } from './socket-detail/socket-detail.component';
import { CpuCreateComponent } from './cpu-create/cpu-create.component';
import { CpuUpdateComponent } from './cpu-update/cpu-update.component';
import { SocketCreateComponent } from './socket-create/socket-create.component';
import { SocketUpdateComponent } from './socket-update/socket-update.component';

const routes: Routes = [
  { path: '', redirectTo: '/sockets', pathMatch: 'full'},
  { path: 'cpus', component: CpuListComponent},
  { path: 'cpu-create', component: CpuCreateComponent},
  { path: 'cpu-edit/:id', component: CpuUpdateComponent},
  { path: 'sockets', component: SocketListComponent},
  { path: 'sockets/:id', component: SocketDetailComponent },
  { path: 'socket-create', component: SocketCreateComponent},
  { path: 'socket-edit/:id', component: SocketUpdateComponent},
  { path: '**', component: SocketListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
