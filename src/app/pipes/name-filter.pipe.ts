import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(value: NamedItem[], args: string): any {
     let filter = args.toLocaleLowerCase();
     return filter ?
      value.filter(item => item.name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
  }

}


export interface NamedItem {
    name: string;
}
