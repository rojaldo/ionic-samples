import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abv'
})
export class AbvPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): any {
    if (typeof value === 'number' && value > 0 && value < 80) {
      if (args.length > 0) {
        if (args[0] === 0) {
          return value + '%';
        } else if (args[0] === 1) {
          return value + 'º';
        } else {
          console.error('Wrong parameter usage in Pipe: AbvPipe');
        }
      }
      return value + '%';
    } else {
      console.error('value is not a number in Pipe: AbvPipe');
      return '#ERROR: AbvPipi: ' + value;
    }
    return value + '%';
  }

}
