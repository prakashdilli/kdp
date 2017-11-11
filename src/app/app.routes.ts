import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { EmailComponent } from './email/email.component';

export const router: Routes = [
  //  { path: '', redirectTo: 'login-email', pathMatch: 'full' },    
    { path: '', component: EmailComponent },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] }

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);