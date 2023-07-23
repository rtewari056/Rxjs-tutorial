import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  /**
   * 
   * @param val Innter text of element
   * @param elementId ID of the element
   */
  // Method to print items on HTML page using element id
  print(val: string, elementId: string): void {
    let elem: HTMLLIElement = document.createElement('li'); // Create element to append in the HTML

    elem.innerText = val; // Set innter text

    document.getElementById(elementId)?.appendChild(elem); // Append element in the HTML
  }
}
