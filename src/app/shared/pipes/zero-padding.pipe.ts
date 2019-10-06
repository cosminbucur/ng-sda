import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'zeropadding' })
export class ZeroPaddingPipe implements PipeTransform {
  transform(num: number): string {
    if (num.toString.length < 3) {
      const result = '000_' + num + '_000';
      return result;
    }
  }
}
