import { Directive, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
selector: '[appHoverer]',
host: {
'(mouseenter)': 'onMouseHover()',
'(mouseleave)': 'onMouseLeave()'
},
standalone: true
})
export class HovererDirective {
constructor(private element: ElementRef,
private sanitizer: DomSanitizer) { }
onMouseHover() {
this.sanitizer.bypassSecurityTrustHtml(this.element.nativeElement.style.color = 'pink');
}
onMouseLeave() {
this.sanitizer.bypassSecurityTrustHtml(this.element.nativeElement.style.color = 'yellow');
}
}
