import { Component, OnInit, OnDestroy } from '@angular/core';
import {ChatService} from "../../services/chat.service";

@Component({
    moduleId:module.id,
    selector: 'chat',
    templateUrl: 'chat.component.html'
})
export class ChatComponent implements OnInit, OnDestroy {

    private messages:any = [];
    private message:string;
    private connection:any;
    private username:string;
    private alert:any = false;
    private hideUsernameBlock:boolean = false;

    constructor(private chatService:ChatService){

    }

    ngOnInit(){
        this.connection = this.chatService.getMessages()
            .subscribe((message) => {
                this.messages.push(message);
            });
    }

    ngOnDestroy(){

        this.connection.unsubscribe();
    }

    sendMessage(){
        this.hideUsernameBlock = true;
        this.chatService.sendMessage(this.message, this.username);
        this.message = "";
    }

    setUsername(){
        this.chatService.setUsername(this.username);
        this.alert = "Username is set";
    }
}
