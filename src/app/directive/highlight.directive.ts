import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) {

    el.nativeElement.style.backgroundColor="#ffc107"
    el.nativeElement.style.borderRadius="10px"
    el.nativeElement.style.height="40px"
    el.nativeElement.style.marginTop="10px"
   }

}
