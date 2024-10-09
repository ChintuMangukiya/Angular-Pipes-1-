import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    if(value.length === 0 || filterString === '')
    {
      return value;
    }
    const resultArray = [];
    for(const item of value)
    {
      if(item['status'] === filterString)
      {
        resultArray.push(item);
  //     }
  //     else
  //     {if(item['instanceType'].toLowerCase().includes(filterString.toLowerCase()) || filterString.toLowerCase().includes(item['instanceType'].toLowerCase()))
  //     {
  //       resultArray.push(item);
  //     }
  //     else{
  //     if(item['name'].toLowerCase().includes(filterString.toLowerCase()) || filterString.toLowerCase().includes(item['name'].toLowerCase()))
  //     {
  //       resultArray.push(item);
  //     }
  //     else{
  //       if(item['started'].toLowerCase().includes(filterString.toLowerCase()) || filterString.toLowerCase().includes(item['started'].toLowerCase()))
  //     {
  //       resultArray.push(item);
  //     }
  //     }
  //   }
  // }}
      }}
    return resultArray;
  }
}