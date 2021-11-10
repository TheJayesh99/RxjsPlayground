import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  print(data:string,element_id:string){
    let el = document.createElement('li')
    el.innerText = data
    document.getElementById(element_id)?.appendChild(el)
  }
}
