import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { errorMonitor } from 'events';
import { from, fromEvent, generate, interval, Observable, of, Subject, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { combineLatest,merge,zip,forkJoin,partition, } from 'rxjs';

import {bufferTime,throttle,audit,switchMap,exhaustMap,toArray,mergeMap,concatMapTo, concatMap,concatAll, bufferToggle,bufferWhen, withLatestFrom, distinctUntilChanged, buffer,first,bufferCount,mergeAll, count, debounce, map, mapTo, skip, take, takeLast, takeUntil, takeWhile, every, exhaust } from 'rxjs/operators';









@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],

})
export class CHILD2Component implements OnInit {
  intervalData = [];
  clickSub;
  intervalSub:Observable<any>;


  @ViewChild('btn') public btn: ElementRef;
  public keyUp = new Subject<KeyboardEvent>();

  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.startInterval();
  }

  child() {
    console.log('child 2')
    return 'child 2';
  }
  startInterval() {
    // const source1=interval(1000)
    // const source2=of(1,2,3,4,5)
    // source2.pipe(concatMap((x)=>ajax.getJSON(`https://jsonplaceholder.typicode.com/todos/${x}`))).subscribe(data=>{
    //   console.log(data);
    // })
    let i=0;

    fromEvent(document.querySelector('button'),'click').pipe(throttle(()=>interval(1000)),map((x)=>[x,i++])).subscribe(data=>{console.log(data)})

  }

}
