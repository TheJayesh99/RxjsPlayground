import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { HelperService } from 'src/services/helper.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {
  obsMsg:any;
  constructor(
    private _helper:HelperService
  ) { }

  ngOnInit(): void {
    const obs1 = of('ramesh','suresh','mukesh')
    obs1.subscribe(
      res =>{
        this._helper.print(res,'ul1')
      }
    )
    
    const obs2 = of({a:'ramesh',b:'suresh',c:'mukesh'})
    obs2.subscribe(
      res =>{
        this.obsMsg = res
      }
    )
  }


}


