import { Pipe, PipeTransform } from '@angular/core';
// pipe that groups by date 
@Pipe({name: 'groupByDate'})
export class GroupByDatePipe implements PipeTransform {
    transform(collection: Array<any>, property: string): Array<any> {
        if(!collection) {
            return null;
        }
        const gc = collection.reduce((previous, current)=> {
          if(!previous[current[property]]) {
               previous[current[property]] = [current];
           } else {
               previous[current[property]].push(current);
           }

           return previous;
       }, {});

        return Object.keys(gc).map(key => ({ key: key, value: gc[key] }));
    }
}
