import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ChatBlockComponent} from "./components/chat-block/chat-block.component";
import {ChatToolsComponent} from "./components/chat-tools/chat-tools.component";
import {ChatFacade} from "./data-access";
import {AsyncPipe} from "@angular/common";
import {IMessage1} from "./data-access/store/chat.reducer";

@Component({
  selector: 'app-container-chat',
  standalone: true,
  imports: [
    ChatBlockComponent,
    ChatToolsComponent,
    AsyncPipe
  ],
  templateUrl: './container-chat.component.html',
  styleUrl: './container-chat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerChatComponent {
  private readonly chatFacade = inject(ChatFacade);
  public readonly messages$ = this.chatFacade.messages$;

  public sendMessage(message: IMessage1): void {
    this.chatFacade.sendMessage(message);
  }

  public connectSocket(): void {
    this.chatFacade.connectSocket();
  }
}
