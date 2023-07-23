import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscriber } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-custom-observable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit {
  private _designUtilityService = inject(DesignUtilityService);

  obsStatus: string = '';

  ngOnInit(): void {
    // EX - 01 (Manual)
    const cusObs1$ = new Observable((subscriber: Subscriber<string>) => {
      setTimeout(() => subscriber.next('Angular'), 1000);
      setTimeout(() => subscriber.next('TypeScript'), 2000);
      setTimeout(() => subscriber.next('HTML & CSS'), 3000);
      setTimeout(() =>{ 
        subscriber.next('Javascript');
        subscriber.error(new Error('Limit exceed'));
      }, 4000);
      setTimeout(() => {
        subscriber.next('React');
        subscriber.complete();
      }, 5000);
    });
    
    // subscribe(data, error, completion)
    cusObs1$.subscribe((res: string) => {
      console.log(res);
      this._designUtilityService.print(res, 'custObsManualContainer');
    },(error: Error) => {
      this.obsStatus = 'error';
    }, () => {
      this.obsStatus = 'completed';
    });

    // EX - 02 (Custom Interval Observable)

    // EX - 03 (Random Names)
  }

}
