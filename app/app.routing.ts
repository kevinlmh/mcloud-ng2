import { Routes, RouterModule } from '@angular/router';

import { FilesComponent }       from './files.component';
import { LoginComponent }       from './login.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'files', component: FilesComponent },
    { path: 'login', component: LoginComponent }
];

export const routing = RouterModule.forRoot(appRoutes);