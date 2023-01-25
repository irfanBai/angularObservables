import { Component, OnInit } from '@angular/core';
import { from, observable, Observable, of, interval } from 'rxjs';
import {filter, map} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-observables';

  // myObservable = new Observable((observer) =>{
  //   console.log("observable starts");
  //   setTimeout(()=>{observer.next("1")},1000)
  //   setTimeout(()=>{observer.next("2")},2000)
  //   setTimeout(()=>{observer.next("3")},3000)
  //   setTimeout(()=>{observer.error(new Error( 'something went wrong'))},3000)
  //   setTimeout(()=>{observer.next("4")},4000)
  //   setTimeout(()=>{observer.next("5")},5000)
  //   // observer.next("2")
  //   // observer.next("3")
  //   // observer.next("4")
  //   // observer.next("5")
  // });

  // myObservable = Observable.create((observer: any) => {
  //   setTimeout(()=>{observer.next("A")},1000)
  //   setTimeout(()=>{observer.next("B")},2000)
  //   setTimeout(()=>{observer.next("C")},3000)
  //   setTimeout(()=>{observer.error(new Error( 'something went wrong'))},3000)
  //   setTimeout(()=>{observer.next("D")},1000)
  //   setTimeout(()=>{observer.next("E")},2000)
  // });

  array1 = [1,2,6,7,8];
  array2 = ['A', 'B', 'C', 'D'];

  // myObservable = of(this.array1, this.array2, 30, 79, "Hello world");

  // myObservable = from(this.array1);

  // transformedObd = this.myObservable.pipe(map((val) => {
  //   return val * 5;
  // }),filter((val) => {
  //     return val >= 30;
  //   }))
 
  // filteredObs = this.transformedObd.pipe(filter((val) => {
  //   return val >= 30;
  // }))

  counterObservable = interval(1000);
  counterSub;

  ngOnInit() {
    // this.myObservable.subscribe((val: any) => {
    //   console.log(val);
    // }, (error: { message: any; }) => {
    //   alert(error.message);
    // }, () => {
    //   alert('Observable has completed emitting all values');
    // });

    this.counterObservable.subscribe((val) => {
      console.log(val);
    })
  }

  unsub() {
    this.counterSub.unsub();
  }

  sub() {
    this.counterObservable.subscribe((val) => {
      console.log(val);
    })
  }
}
