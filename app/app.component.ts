import { Component, OnInit, OnDestroy } from '@angular/core';
import {ChatService} from "./services/chat.service";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent  {

  constructor(private chatService:ChatService){

  }

}
