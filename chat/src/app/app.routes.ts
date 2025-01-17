import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '', loadComponent: () => import('./components/chat/container-chat/container-chat.component')
      .then((c) => c.ContainerChatComponent)
  }]
