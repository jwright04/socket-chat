import {Injectable} from "@angular/core";
import {Subject, Observable} from "rxjs/Rx";
import * as io from 'socket.io-client';

@Injectable()
export class ChatService{

    private url:string = "http://localhost:8000";
    private socket:any;

    sendMessage(message:string, username:string){
        this.socket.emit('add-message', message, username);
    }

    getMessages(){
        let observable$ = new Observable((observer:any) => {
            this.socket = io(this.url);
            this.socket.on('message', (data:any) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            }
        });
        return observable$;
    }

    setUsername(username:string){
        sessionStorage.setItem('username', username);
    }

    getUsername(){
        return sessionStorage.getItem('username');
    }
}