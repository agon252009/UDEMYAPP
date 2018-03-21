import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  private _open = false;
  @HostListener('click')

  onclick() {
    this._open = !this._open;
    this.toggleShow();
  }

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {}

  private toggleShow() {
    if (this._open) {
      this._renderer.addClass(this._elementRef.nativeElement.nextElementSibling, 'show');
    } else {
      this._renderer.removeClass(this._elementRef.nativeElement.nextElementSibling, 'show');
    }
  }
}
