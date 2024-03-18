import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appValidarNome]'
})
export class ValidarNomeDirective {

  constructor() { }

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    const pattern = /[a-zA-ZÀ-ú\s]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
