import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subject, Subscriber, Subscription, takeUntil } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-custom-observable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit, OnDestroy {
  private _designUtilityService = inject(DesignUtilityService);

  obsStatus1: string = '';
  obsStatus2: string = '';
  
  name!: string;
  nameStatus: string = '';

  unsubscribe$: Subject<void> = new Subject<void>;

  ngOnInit(): void {
    // EX - 01 (Manual)
    const cusObs1$: Observable<string> = new Observable((subscriber: Subscriber<string>) => {
      setTimeout(() => subscriber.next('Angular'), 1000);
      setTimeout(() => subscriber.next('TypeScript'), 2000);
      setTimeout(() => {
        subscriber.next('HTML & CSS');
        subscriber.complete();
      }, 3000);
      setTimeout(() =>{ 
        subscriber.next('Javascript');
        // subscriber.error(new Error('Limit exceed'));
      }, 4000);
      setTimeout(() => {
        subscriber.next('React');
        // subscriber.complete();
      }, 5000);
    });
    
    // subscribe(data, error, completion)
    cusObs1$.subscribe((res: string) => {
      this._designUtilityService.print(res, 'custObsManualContainer');
    },(error: Error) => {
      this.obsStatus1 = 'error';
    }, () => {
      this.obsStatus1 = 'completed';
    });
    
    // EX - 02 (Custom Interval Observable)
    const arr2: string[] = ['Angular', 'JavaScript', 'HTML', 'CSS', 'TypeScript'];
    
    const cusObs2$: Observable<string> = new Observable((subscriber: Subscriber<string>) => {
      let count: number = 0;
      
      setInterval(() => {
        subscriber.next(arr2[count]);
        
        if(count >= 2) subscriber.error('Error emit');
        
        if(count >= 5) subscriber.complete();
        
        count++;
      }, 1000);
    })
    
    cusObs2$.pipe(takeUntil(this.unsubscribe$)).subscribe((res: string) => {
      this._designUtilityService.print(res, 'custInterObsContainer');
      // console.log(res);
    },(error: Error) => {
      this.obsStatus2 = 'error';
    }, () => {
      this.obsStatus2 = 'completed';
    });

    // EX - 03 (Random Names)
    const arr3: string[] = ['Rohit', 'Aman', 'Chaman', 'Sameer', 'John', 'Alex', 'Robert'];

    const cusObs3$ = new Observable((subscriber: Subscriber<string>) => {
      let count: number = 0;
      
      setInterval(() => {
        subscriber.next(arr3[count]);
        
        // if(count >= 4) subscriber.error('Error emit');
        
        if(count >= 6) subscriber.complete();
        
        count++;
      }, 1000);

    });

    cusObs3$.pipe(takeUntil(this.unsubscribe$)).subscribe((res: string) => {
      this.name = res;
      // console.log(res);
    },(error: Error) => {
      this.nameStatus = 'error';
    }, () => {
      this.nameStatus = 'completed';
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

}
