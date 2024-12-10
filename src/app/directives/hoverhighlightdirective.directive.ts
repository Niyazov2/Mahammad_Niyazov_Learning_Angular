import { Directive, ElementRef, HostListener, Input, input } from '@angular/core';

@Directive({
  selector: '[appHoverhighlightdirective]',
  standalone: true
})
export class HoverhighlightdirectiveDirective {
  @Input() appHoverHighlight = '';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHoverHighlight || '#bdc1ac');
  }

  @HostListener('mouseenter') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
