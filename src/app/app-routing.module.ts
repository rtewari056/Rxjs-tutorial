import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: 'promise',
  //   loadComponent: () => import('./pages/promise/promise.component').then(m => m.PromiseComponent)
  // },
  {
    path: 'observable',
    loadComponent: () => import('./pages/observable/observable.component').then(m => m.ObservableComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/list/list.component').then(m => m.ListComponent)
      },
      {
        path: 'from-event',
        loadComponent: () => import('./components/from-event/from-event.component').then(m => m.FromEventComponent)
      },
      {
        path: 'interval',
        loadComponent: () => import('./components/interval/interval.component').then(m => m.IntervalComponent)
      },
      {
        path: 'timer',
        loadComponent: () => import('./components/timer/timer.component').then(m => m.TimerComponent)
      },
      {
        path: 'of-from',
        loadComponent: () => import('./components/of-from/of-from.component').then(m => m.OfFromComponent)
      },
      {
        path: 'to-array',
        loadComponent: () => import('./components/to-array/to-array.component').then(m => m.ToArrayComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'observable'
  }
];