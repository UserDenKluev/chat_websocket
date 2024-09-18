import {Component, inject} from '@angular/core';
import {ChatFacade} from "../../data-access";
import {AsyncPipe, NgForOf} from "@angular/common";
import {ApiService} from "../../../../../http/api.service";

@Component({
  selector: 'app-chat-tools',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './chat-tools.component.html',
  styleUrl: './chat-tools.component.scss'
})
export class ChatToolsComponent {
  private readonly facade = inject(ChatFacade);
  public readonly messages$ = this.facade.messages$;

  public service = inject(ApiService);


  click() {

  }
}
