import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { TodoComponent } from './todo/todo.component';
import { AppRoutingModule } from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import { ChildServerComponent } from './child-server/child-server.component';
import { CHILD1Component } from './child1/child1.component';
import { CHILD2Component } from './child2/child2.component';
import { TodosComponent } from './todos/todos.component';
import { ZippyComponent } from './zippy/zippy.component';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    AboutComponent,
    TodoComponent,
    ChildServerComponent,
    CHILD1Component,
    CHILD2Component,
    TodosComponent,
    ZippyComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
