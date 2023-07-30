import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscription, from, interval, map } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private _designUtilityService = inject(DesignUtilityService);

  // Subscriptions
  sub1!: Subscription;
  sub2!: Subscription;

  // Messages
  msg1!: string;
  msg2!: number;

  ngOnInit(): void {

    const broadcastVideos$: Observable<number> = interval(1000);

    // Ex - 01
    this.sub1 = broadcastVideos$.pipe(map(data => `Video ${data}`)).subscribe((res: string) => {
      this.msg1 = res;

    })

    setTimeout(() => this.sub1.unsubscribe(), 10000); // Unsubscribe after 10 sec

    // Ex - 02
    this.sub2 = broadcastVideos$.pipe(map(data => data * 3)).subscribe((res: number) => {
      this.msg2 = res;
    })

    setTimeout(() => this.sub2.unsubscribe(), 10000); // Unsubscribe after 10 sec

    // Ex - 03
    type Member = { id: number; name: string; }

    // Creates observable stream of the array
    const members$: Observable<Member> = from([
      { id: 1, name: 'Rohit' },
      { id: 2, name: 'Aman' },
      { id: 3, name: 'Chaman' },
      { id: 4, name: 'Anup' },
      { id: 5, name: 'Samuel' },
      { id: 6, name: 'John' },
      { id: 7, name: 'Rahul' },
      { id: 8, name: 'Nakul' }
    ]);

    members$.pipe(map(data => data.name)).subscribe((res) => {
      this._designUtilityService.print(res, 'mapContainer');
    })

  }

}
