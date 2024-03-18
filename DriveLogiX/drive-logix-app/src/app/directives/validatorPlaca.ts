import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appValidarPlaca]'
})
export class ValidarPlacaDirective {

  constructor(private ngControl: NgControl) { }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    const placa = value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    
    let formattedPlaca = '';
    if (placa.length <= 3) {
      formattedPlaca = placa;
    } else {
      formattedPlaca = `${placa.substring(0, 3)}-${placa.substring(3, 7)}`;
    }
    
    this.ngControl.control?.setValue(formattedPlaca);
  }
}
