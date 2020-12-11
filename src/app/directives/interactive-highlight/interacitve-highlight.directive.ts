import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appInteracitveHighlight]'
})
export class InteracitveHighlightDirective implements OnInit {
  private renderer: Renderer2;
  private elementRef: ElementRef;

  constructor(renderer: Renderer2, elementRef: ElementRef) {
    this.elementRef = elementRef;
    this.renderer = renderer;
  }

  @HostListener('mouseenter') mouseover(eventData: Event): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }

  ngOnInit(): void {
  }
}

