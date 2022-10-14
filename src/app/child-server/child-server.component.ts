import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-server',
  templateUrl: './child-server.component.html',
  styleUrls: ['./child-server.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildServerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
