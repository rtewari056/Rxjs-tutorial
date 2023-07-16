import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-interval',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {
  obsMsg!: string;
  videoSubscription!: Subscription;

  ngOnInit(): void {
    // Creates an Observable that emits sequential numbers every specified interval of time
    const broadcastVideos: Observable<number> = interval(1000);

    this.videoSubscription = broadcastVideos.subscribe(res => {
      console.log(res);
      this.obsMsg = `Video ${res}`
      if(res >= 10) this.videoSubscription.unsubscribe(); // Unsubscribe when res >= 10
    })

  }
}
