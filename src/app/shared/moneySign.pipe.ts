import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneySign', //to call a pipe we've got to use its name
})
export class MoneySignPipe implements PipeTransform {
  transform(value: number): string {
    return `$${value}`;
  }
}
