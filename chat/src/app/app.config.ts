import {ApplicationConfig, provideZoneChangeDetection, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient} from "@angular/common/http";
import * as ChatEffects from "./components/chat/container-chat/data-access/store/chat.effects";
import {chatReducer} from "./components/chat/container-chat/data-access/store/chat.reducer";

export const appConfig: ApplicationConfig = {
  providers:
    [provideZoneChangeDetection({eventCoalescing: true}),
      provideRouter(routes),
      provideStore({
        [chatReducer.name]: chatReducer.reducer
      }),
      provideEffects(
        ChatEffects
      ),
      provideStoreDevtools({
        maxAge: 25,
        logOnly: !isDevMode()
      }),
      provideAnimationsAsync(),
      provideHttpClient()
    ]
};
