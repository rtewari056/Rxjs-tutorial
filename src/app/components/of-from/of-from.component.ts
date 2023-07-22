import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of, from } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

type obs2Type = { name1: string, name2: string, name3: string };

@Component({
  selector: 'app-of-from',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})


export class OfFromComponent implements OnInit {
  private _designUtilityService = inject(DesignUtilityService);

  obs2Msg!: obs2Type;

  ngOnInit(): void {
    // OF (String)
    const obs1$: Observable<string> = of('Rohit', 'Aman', 'Chaman');

    obs1$.subscribe((res: string) => {
      console.log(res);
      this._designUtilityService.print(res, 'ofContainer');
    })
    
    // OF (Object)
    const obs2$: Observable<obs2Type> = of({ name1: 'Rohit', name2: 'Aman', name3: 'Chaman' });
    
    obs2$.subscribe((res: obs2Type) => {
      this.obs2Msg = res;
      console.log(res);
    })
    
    // FROM (String)
    const obs3$: Observable<string> = from(['Angular', 'React', 'Vue']);
    
    obs3$.subscribe((res: string) => {
      this._designUtilityService.print(res, 'fromContainer');
      console.log(res);
    })
    
    // FROM (Promise)
    const promise: Promise<string> = new Promise(resolve => {
      setTimeout(() => resolve('Promise Resolved'), 3000);
    })

    const obs4$: Observable<string> = from(promise);
    
    obs4$.subscribe((res: string) => {
      this._designUtilityService.print(res, 'fromPromiseContainer');
      console.log(res);
    })
    
    // FROM (String)
    const obs5$: Observable<string> = from("Welcome to RxJS");
    
    obs5$.subscribe((res: string) => {
      this._designUtilityService.print(res, 'fromStringContainer');
      console.log(res);
    })
  }
}
