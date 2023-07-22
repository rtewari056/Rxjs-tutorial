import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  // Method to print items on HTML page using element id
  print(val: string, elementId: string): void {
    let elem: HTMLLIElement = document.createElement('li');
    elem.innerText = val;
    document.getElementById(elementId)?.appendChild(elem);
  }
}
