import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  private renderer: Renderer2;
  private elementRef: ElementRef;

  constructor(renderer: Renderer2, elementRef: ElementRef) {
    this.elementRef = elementRef;
    this.renderer = renderer;
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
  }
}

