import { Component, OnInit } from '@angular/core';
import { interval, observable, Subscription, timer } from 'rxjs';
import { HelperService } from 'src/services/helper.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {
  dataSubscription: Subscription | undefined
  dataTimer: Subscription | undefined
  constructor(
    private _helper: HelperService
  ) { }

  ngOnInit(): void {
    const broadCastData = interval(1000)

    this.dataSubscription = broadCastData.subscribe(
      res => {
        this._helper.print('data ' + res, 'ulInterval')

        if (res >= 5) {
          this.dataSubscription?.unsubscribe()
        }
      })
    
    const broadCastDataTimer = timer(3000,1000)

    this.dataTimer = broadCastDataTimer.subscribe(
      res => {
        this._helper.print('data ' + res, 'ulTimer')

        if (res >= 5) {
          this.dataTimer?.unsubscribe()
        }
      })
  }
}

//zonejs in angu
// observable,oberver ,operator ,subcription subject and schebular