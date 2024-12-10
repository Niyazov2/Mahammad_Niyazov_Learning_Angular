import { Directive, ElementRef, Host, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {
  @Input('appHighlightOnFocus') highlightColor: string ='#bdc1ac';

  constructor(private el: ElementRef) {}

  @HostListener('focus') onFocus(): void{
    this.highlight(this.highlightColor || 'lightblue');
  }

  @HostListener('blur') onBlur(): void{
    this.highlight('');
  }

  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
