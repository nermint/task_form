import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSeparated]'
})
export class SeparatedDirective {
  DECIMAL_SEPARATOR=".";
  GROUP_SEPARATOR=",";
  // private regex: RegExp = new RegExp(/^\d*\,?\d{0,3}$/g);
  // // Allow key codes for special events. Reflect :
  // // Backspace, tab, end, home
  // private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];

  constructor(private el: ElementRef) {
  }
  @HostListener('keydown', ['$event'])

  // onKeyDown(event: KeyboardEvent) {
  //   console.log(this.el.nativeElement.value);
  //   if (this.specialKeys.indexOf(event.key) !== -1) {
  //     return;
  //   }
  //   let current: string = this.el.nativeElement.value;
  //   const position = this.el.nativeElement.selectionStart;
  //   const next: string = [current.slice(0, position), event.key === 'Decimal' ? ',' : event.key, current.slice(position)].join('');
  //   if (next && !String(next).match(this.regex)) {
  //     event.preventDefault();
  //   }

  // format(valString) {
  //   if (!valString) {
  //       return '';
  //   }
  //   let val = valString.toString();
  //   const parts = this.unFormat(val).split(this.DECIMAL_SEPARATOR);
  //   return parts[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, this.GROUP_SEPARATOR)

  // };

  // unFormat(val) {
  //     if (!val) {
  //         return '';
  //     }
  //     val = val.replace(/^0+/, '').replace(/\D/g,'');
  //     if (this.GROUP_SEPARATOR === ',') {
  //         return val.replace(/,/g, '');
  //     } else {
  //         return val.replace(/\./g, '');
  //     }
  // };



  // }
   onKeyDown(event: KeyboardEvent) {
    if (!this.el.nativeElement.value) {
        return '';
    }
    let val = this.el.nativeElement.value.toString();
    const parts = this.unFormat(val).split(this.DECIMAL_SEPARATOR);
    return parts[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, this.GROUP_SEPARATOR)
   }

    unFormat(val) {
      if (!val) {
          return '';
      }
      val = val.replace(/^0+/, '').replace(/\D/g,'');
      if (this.GROUP_SEPARATOR === ',') {
          return val.replace(/,/g, '');
      } else {
          return val.replace(/\./g, '');
      }
    };



}
