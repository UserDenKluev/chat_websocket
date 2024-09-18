import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContainerChatComponent} from "./components/chat/container-chat/container-chat.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContainerChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
