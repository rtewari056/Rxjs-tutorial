import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, filter, from, toArray } from 'rxjs';

type User = { id: number, name: string, gender: string }

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  users: User[] = [
    { id: 1, name: 'Anup', gender: 'Male' },
    { id: 2, name: 'Priyanka', gender: 'Female' },
    { id: 3, name: 'Ashish', gender: 'Male' },
    { id: 4, name: 'Vivek', gender: 'Male' },
    { id: 5, name: 'Janet', gender: 'Female' },
    { id: 6, name: 'Moumita', gender: 'Female' },
    { id: 7, name: 'Rajesh', gender: 'Male' },
    { id: 8, name: 'Sanjana', gender: 'Female' },
    { id: 9, name: 'Neha', gender: 'Female' },
    { id: 10, name: 'Sakshi', gender: 'Female' },
    { id: 11, name: 'Neeraj', gender: 'Male' },
    { id: 12, name: 'Pradeep', gender: 'Male' }
  ];

  usersData1!: User[];
  usersData2!: User[];
  usersData3!: User[];

  ngOnInit(): void {

    const source$: Observable<User> = from(this.users);

    // Ex - 01 (Filter by name length)
    source$.pipe(filter(user => user.name.length > 6), toArray()).subscribe({
      next: (res: User[]) => {
        console.log(res);
        this.usersData1 = res;
      }
    });

    // Ex - 02 (Filter by name gender)
    source$.pipe(filter(user => user.gender === 'Male'), toArray()).subscribe({
      next: (res: User[]) => {
        console.log(res);
        this.usersData2 = res;
      }
    });

    // Ex - 03 (Filter by nth item)
    source$.pipe(filter(user => user.id <= 6), toArray()).subscribe({
      next: (res: User[]) => {
        console.log(res);
        this.usersData3 = res;
      }
    });

  }

}
