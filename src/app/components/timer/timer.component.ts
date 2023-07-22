import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  private _designUtilityService = inject(DesignUtilityService);

  obsMsg!: string;
  videoSubscription!: Subscription;

  ngOnInit(): void {
    // Creates an observable that starts an interval after a specified delay, emitting incrementing numbers
    const broadcastVideos$: Observable<number> = timer(5000, 1000);

    this.videoSubscription = broadcastVideos$.subscribe(res => {
      console.log(res);
      this.obsMsg = `Video ${res}`;

      this._designUtilityService.print(this.obsMsg, 'timerContainer1');
      this._designUtilityService.print(this.obsMsg, 'timerContainer2');
      this._designUtilityService.print(this.obsMsg, 'timerContainer3');
      
      if(res >= 10) this.videoSubscription.unsubscribe(); // Unsubscribe when res >= 10
    })

  }
}
