import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverhighlightdirective]',
  standalone: true
})
export class HoverhighlightdirectiveDirective {
  @Input() appHoverhighlightdirective = '';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHoverhighlightdirective || '#bdc1ac');
  }

  @HostListener('mouseenter') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
