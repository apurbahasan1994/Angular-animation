import { Component, Input } from "@angular/core";
import {
  animate,
  animateChild,
  group,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
  useAnimation,
} from "@angular/animations";

@Component({
  selector: "zippy",
  templateUrl: "./zippy.component.html",
  styleUrls: ["./zippy.component.css"],
  animations: [
    trigger("expandCollapse", [
      state(
        "collapsed",
        style({
          height: 0,
          paddingTop: 0,
          paddingBottom: 0,
          opacity: 0
        })
      ),
      // state("expanded", style({ height: "*", padding: "*",  })),
      transition("collapsed=>expanded", [ animate("300ms ease-out",style({ height: "*", padding: "*",  })),animate('500ms', style({ opacity: 1 }))]),
      transition("expanded=>collapsed", [animate("300ms ease-in")]),
    ]),
  ],
})
export class ZippyComponent {
  @Input("title") title: string;
  isExpanded: boolean;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
