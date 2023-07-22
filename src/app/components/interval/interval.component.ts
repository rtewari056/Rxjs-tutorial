import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, interval, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-interval',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {
  private _designUtilityService = inject(DesignUtilityService);

  obsMsg!: string;
  videoSubscription!: Subscription;

  ngOnInit(): void {
    // Creates an Observable that emits sequential numbers every specified interval of time
    const broadcastVideos$: Observable<number> = interval(1000);

    this.videoSubscription = broadcastVideos$.subscribe((res: number) => {
      console.log(res);
      this.obsMsg = `Video ${res}`;

      this._designUtilityService.print(this.obsMsg, 'intervalContainer1');
      this._designUtilityService.print(this.obsMsg, 'intervalContainer2');
      this._designUtilityService.print(this.obsMsg, 'intervalContainer3');
      
      if(res >= 10) this.videoSubscription.unsubscribe(); // Unsubscribe when res >= 10
    })

  }
}
