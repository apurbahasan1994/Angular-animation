import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],

})
export class CHILD1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  child(){
    console.log('child 1')
    return  'child 1';
  }

}
