import { BorderHighlightDirective } from './border-highlight.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('BorderHighlightDirective', () => {
  it('should create an instance', () => {
    let element: ElementRef;
    let renderer: Renderer2;
    const directive = new BorderHighlightDirective(element, renderer);
    expect(directive).toBeTruthy();
  });
});
