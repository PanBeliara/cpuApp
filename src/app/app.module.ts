import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CpuListComponent } from './cpu-list/cpu-list.component';
import { SocketListComponent } from './socket-list/socket-list.component';
import { SocketService } from './service/socket.service';
import { SocketDetailComponent } from './socket-detail/socket-detail.component';

import { AccordionModule } from '@syncfusion/ej2-angular-navigations';
import { CpuCreateComponent } from './cpu-create/cpu-create.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CpuUpdateComponent } from './cpu-update/cpu-update.component';
import { SocketCreateComponent } from './socket-create/socket-create.component';
import { SocketUpdateComponent } from './socket-update/socket-update.component';

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
  declarations: [
    AppComponent,
    CpuListComponent,
    SocketListComponent,
    SocketDetailComponent,
    CpuCreateComponent,
    CpuUpdateComponent,
    SocketCreateComponent,
    SocketUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AccordionModule,
    ReactiveFormsModule,
    ConfirmationPopoverModule.forRoot(
      {
        confirmButtonType: 'danger'
      }
    )
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
