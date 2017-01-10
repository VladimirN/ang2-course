import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeStampPipe'
})
export class TimeStampPipePipe implements PipeTransform {

  transform(value: number): string {
    let hours = Math.floor(value / 60);
    let mins = value % 60;

    let result = '';

    if (hours > 0)
      result += hours + 'h ';

    result += mins + 'min';
    return result;
  }

}
