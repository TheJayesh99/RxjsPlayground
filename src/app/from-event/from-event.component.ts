import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { HelperService } from 'src/services/helper.service';

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
  
  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    let count = 1
    fromEvent(this.addBtn?.nativeElement,'click').subscribe(
      res => {
        this._helper.print('data '+count++,'ul1')
      }
    )
  }

 

}
