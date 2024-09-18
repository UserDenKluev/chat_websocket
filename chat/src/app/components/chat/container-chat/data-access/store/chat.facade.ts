import {Store} from "@ngrx/store";
import {inject, Injectable} from "@angular/core";
import * as ChatActions from "./chat.actions";
import {IMessage, IMessage1} from "./chat.reducer";
import {selectAllMessages} from "./chat.selectors";

@Injectable(
  {providedIn: 'root'}
)
export class ChatFacade {
  private readonly store = inject(Store);

  public readonly messages$ = this.store.select(selectAllMessages);

  public getMessages(): void {
    this.store.dispatch(ChatActions.MessagesActions.loadMessages());
  }

  public sendMessage(message: IMessage1): void {
    this.store.dispatch(ChatActions.MessagesActions.sendMessage({message}));
  }

  public connectSocket(): void {
    this.store.dispatch(ChatActions.MessagesActions.connectSocket());
  }
}
