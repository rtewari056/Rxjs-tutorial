import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, from, interval, of, take, toArray } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

type User = {
  name: string,
  skill: string
}

@Component({
  selector: 'app-to-array',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {
  private _designUtilityService = inject(DesignUtilityService);

  users: User[] = [
    { name: 'Rohit', skill: 'Angular' },
    { name: 'Aman', skill: 'Vue' },
    { name: 'Chaman', skill: 'React' },
    { name: 'Parth', skill: 'Ionic' }
  ]

  ngOnInit(): void {

    // EX - 01
    const source1$: Observable<number[]> = interval(1000).pipe(take(5), toArray());

    source1$.subscribe((res: number[]) => {
      console.log(res);
      this._designUtilityService.print(JSON.stringify(res), 'toArrayIntervalContainer');
    })
    
    // EX - 02
    const source2$: Observable<User[]> = from(this.users).pipe(toArray());
    
    source2$.subscribe((res: User[]) => {
      console.log(res);
      this._designUtilityService.print(JSON.stringify(res), 'toArrayFromContainer');
    })
    
    // EX - 03
    const source3$: Observable<string[]> = of('Angular', 'React', 'Vue').pipe(toArray());
    
    source3$.subscribe((res: string[]) => {
      console.log(res);
      this._designUtilityService.print(JSON.stringify(res), 'toArrayOfContainer');
    })
  }

}
