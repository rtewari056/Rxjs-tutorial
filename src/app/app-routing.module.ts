import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: 'promise',
  loadComponent: () => import('./pages/promise/promise.component').then(m => m.PromiseComponent)
}, {
  path: 'observable',
  loadComponent: () => import('./pages/observable/observable.component').then(m => m.ObservableComponent),
  children: [
    {
      path: '',
      loadComponent: () => import('./components/list/list.component').then(m => m.ListComponent)
    },
    {
      path: 'from-event',
      loadComponent: () => import('./components/from-event/from-event.component').then(m => m.FromEventComponent)
    }
  ]
}, {
  path: '**',
  redirectTo: 'promise'
}];