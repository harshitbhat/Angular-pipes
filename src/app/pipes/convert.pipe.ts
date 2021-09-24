import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: number, targetUnits: string): number {
    switch (targetUnits) {
      case 'km':
        return value * 1.609;
      case 'm':
        return value * 1.609 * 1000;
      case 'cm':
        return value * 1.609 * 1000 * 100;
      default:
        throw new Error('Target value not supported');
    }
  }
}
