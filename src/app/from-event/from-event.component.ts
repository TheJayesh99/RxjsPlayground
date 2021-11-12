import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { HelperService } from 'src/services/helper.service';
import { map, scan } from 'rxjs/operators';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit , AfterViewInit{

  constructor(
    private _helper:HelperService
  ) { }
  
  @ViewChild('addBtn') addBtn: ElementRef | undefined;
  @ViewChild('addBtn2') addBtn2: ElementRef | undefined;
  
  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    let count = 1
    fromEvent(this.addBtn?.nativeElement,'click').subscribe(
      res => {
        this._helper.print('data '+count++,'ul1')
      }
    )

    const clicks = fromEvent(this.addBtn2?.nativeElement, 'click')
    const obs2 = of(1,2,3)
    obs2.pipe(map((x: number) => {x*x})).subscribe(data =>{
      console.log(data);
      
    })
    clicks
      .pipe(
        map(val => {
          return Math.random() *10
        }),
        scan((totalValue,value) => totalValue+value)
        )
      .subscribe(data => {
        this._helper.print('Sum =  '+data,'ul2')      
    })
    
  }

 

}
