import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./ui/hone/hone.module').then(m => m.HoneModule) },
      { path: 'service', loadChildren: () => import('./ui/service/service.module').then(m => m.ServiceModule) },
      { path: 'contact', loadChildren: () => import('./ui/contact/contact.module').then(m => m.ContactModule) },
      { path: 'about', loadChildren: () => import('./ui/about/about.module').then(m => m.AboutModule) },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
