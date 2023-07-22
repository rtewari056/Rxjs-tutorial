import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-from-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {
  private _designUtilityService = inject(DesignUtilityService);

  @ViewChild('addVideoBtn') addVideoBtn!: ElementRef;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    let count: number = 1;
    fromEvent(this.addVideoBtn.nativeElement, 'click').subscribe(res => {
      const coutVal = `Video ${count}`;
      console.log(coutVal);
      
      // Print values on page
      this._designUtilityService.print(coutVal, 'elemContainer');
      count++;
    });
  }

}
