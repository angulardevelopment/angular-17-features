import { Directive, Input, Renderer2, ElementRef, HostBinding, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appDisable]', // This will apply the directive to any element with the appDisable attribute
  standalone: true,
})
export class DisableDirective implements OnChanges {
  @Input() appDisable: boolean = false;  // Input that will control whether the element is disabled
  @Input() disableState: boolean = false; // A second input to manage the disabled state specifically

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['disableState']) {
      this.toggleDisable();
    }
  }

  private toggleDisable(): void {
    if (this.disableState) {
      // Disable the element (add 'disabled' attribute or class)
      this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'true');
      this.renderer.addClass(this.el.nativeElement, 'disabled');
    } else {
      // Enable the element (remove 'disabled' attribute or class)
      this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
      this.renderer.removeClass(this.el.nativeElement, 'disabled');
    }
  }
}
