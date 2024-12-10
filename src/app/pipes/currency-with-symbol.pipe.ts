import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyWithSymbol',
  standalone: true,
})

export class CurrencyWithSymbolPipe implements PipeTransform {
  transform(value: number, currencySymbol: string = '$'): string {
    if (value === null || value === undefined) return '';
    return `${currencySymbol}${value.toFixed(2)}`;
  }
}
