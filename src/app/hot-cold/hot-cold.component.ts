import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HelperService } from 'src/services/helper.service';

@Component({
  selector: 'app-hot-cold',
  templateUrl: './hot-cold.component.html',
  styleUrls: ['./hot-cold.component.scss']
})
export class HotColdComponent implements OnInit {

  constructor(
    private _helper: HelperService
  ) { }

  ngOnInit(): void {

    // CODE FOR COLD OBSERVER

    const cold = new Observable((observer) => {
      observer.next(Math.random())
    });

    cold.subscribe(
      a => {
        console.log(`Subscriber A: ${a}`)
        this._helper.print(`Subscriber A: ${a}`, "ul1")
      }
    )
    cold.subscribe(
      b => {
        console.log(`Subscriber B: ${b}`)
        this._helper.print(`Subscriber B: ${b}`, "ul1")
      })

      // CODE FOR HOT OBSERVER

    const x = Math.random()

    const hot = new Observable(observer => {
      observer.next(x)
    });

    hot.subscribe(a => {
      console.log(`Subscriber A: ${a}`)
      this._helper.print(`Subscriber A: ${a}`, "ul2")
    })
    hot.subscribe(b => {
      console.log(`Subscriber B: ${b}`)
      this._helper.print(`Subscriber B: ${b}`, "ul2")
    })
  }

}
