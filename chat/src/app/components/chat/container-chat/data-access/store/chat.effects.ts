import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {MessagesActions} from "./chat.actions";
import {catchError, map, of, switchMap} from "rxjs";
import {ApiService} from "../../../../../http/api.service";

export const loadMessages = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);

    return actions$.pipe(
      ofType(MessagesActions.loadMessages),
      switchMap(() =>
        apiService.getAllMessages().pipe(
          map((messages) => MessagesActions.loadMessagesSuccess({messages})),
          catchError((error) => {
            return of(MessagesActions.loadMessagesFailure({error: error.message}));
          })
        )
      )
    );
  }, {functional: true}
);

export const sendMessage = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);

    return actions$.pipe(
      ofType(MessagesActions.sendMessage),
      switchMap(({message}) =>
        apiService.sendMessage(message).pipe(
          map((message) => MessagesActions.sendMessageSuccess({message})
          ),
          catchError((error) => {
            return of(MessagesActions.sendMessageFailure({error: error.message}));
          })
        )
      )
    );
  }, {functional: true}
);

export const connectSocket = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);

    return actions$.pipe(
      ofType(MessagesActions.connectSocket),
      switchMap(() =>
        apiService.getMessages().pipe(
          map((message) => MessagesActions.connectSocketSuccess({message})
          ),
          catchError((error) => {
            return of(MessagesActions.connectSocketFailure({error: error.message}));
          })
        )
      )
    );
  }, {functional: true}
);
