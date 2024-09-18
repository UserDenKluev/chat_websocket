import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMessage, IMessage1} from "../components/chat/container-chat/data-access/store/chat.reducer";
import {io} from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly http = inject(HttpClient);

  private readonly url = 'https://x8ki-letl-twmt.n7.xano.io/api:mqNTjBGh';

  getAllMessages(): Observable<IMessage[]> {
    return this.http.get<IMessage[]>(`http://localhost:8000/api/messages`);
  }


  sendMessage(message: { message: string }): Observable<{ message: string }> {
    return this.http.post<{ message: string }>('http://localhost:8000/api/message', message)
  }


  private socket = io('ws://localhost:8080', {});

  getMessages(): Observable<IMessage1> {
    return new Observable((observer) => {
      this.socket.on('message', (message) => {
        observer.next(message);
      });

      return () => {
        this.socket.disconnect()
      }
    })
  }

  public count = 0;

  public click(): void {
    this.count++;
  }

}
