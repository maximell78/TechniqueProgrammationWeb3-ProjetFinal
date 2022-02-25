import { Pipe, PipeTransform } from '@angular/core';
import { Forfaits } from './forfaits';

@Pipe({
  name: 'caraibe'
})
export class CaraibePipe implements PipeTransform {

  transform(forfait: Forfaits[]): Forfaits[] {
    return forfait.filter(forfait => forfait.region === 'caraibe');
  }

}
