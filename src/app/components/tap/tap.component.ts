import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscription, interval, map, tap, BehaviorSubject } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-tap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TapComponent implements OnInit {
  private _designUtilityService = inject(DesignUtilityService);
  public readonly myColor$: BehaviorSubject<string> = new BehaviorSubject('');

  // Subscriptions
  sub1!: Subscription;
  sub2!: Subscription;

  // myColor: string = '';

  ngOnInit(): void {
    const source$: Observable<number> = interval(1500);

    // EX - 01
    const names: string[] = ['Rohit', 'Aman', 'Chaman', 'Sameer', 'John', 'Alex', 'Robert'];

    this.sub1 = source$.pipe(
      tap(res => {
        // console.log('Tap before => ', res);
        if (res === 4) {
          this.sub1.unsubscribe();
        }
      }),
      map(res => names[res]),
      // tap(res => console.log('Tap after => ', res)),
    ).subscribe({
      next: (res: string) => {
        this._designUtilityService.print(res, 'tapContainer1');
        // console.log(res);
      }
    });

    // EX - 02
    const colors: string[] = ['Red', 'Green', 'Blue', 'Orange', 'Yellow', 'Purple', 'Black'];

    this.sub2 = source$.pipe(
      tap(res => {
        this.myColor$.next(colors[res]);
        if (res === 7) {
          this.sub2.unsubscribe();
        }
      }),
      map(res => colors[res])
    ).subscribe({
      next: (res: string) => {
        this._designUtilityService.print(res, 'tapContainer2');
        // console.log(res);
      }
    });
  }

}
