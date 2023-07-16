import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {
  @ViewChild('addVideoBtn') addVideoBtn!: ElementRef;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    let count: number = 1;
    fromEvent(this.addVideoBtn.nativeElement, 'click').subscribe(res => {
      const coutVal = `Video ${count}`;
      console.log(coutVal);
      
      this.printListItem(coutVal);
      count++;
    });
  }

  printListItem(val: string): void {
    let elem: HTMLLIElement = document.createElement('li');
    elem.innerText = val;
    document.getElementById('elemContainer')?.appendChild(elem);
  }

}
