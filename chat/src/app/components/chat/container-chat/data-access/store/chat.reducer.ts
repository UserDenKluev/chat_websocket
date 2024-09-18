import {createFeature, createReducer, on} from "@ngrx/store";
import {MessagesActions} from "./chat.actions";

export interface IMessage {
  id: number;
  from_user: string;
  channel_id: string;
  content: string;
}

export interface IMessage1 {
  message: string
}

export const CHAT_KEY = 'chat';

export interface ChatState {
  messages: IMessage1[];
  newMessage: IMessage1;
  error: string | null;
}

export const initialState: ChatState = {
  messages: [],
  newMessage: {message: '123'},
  error: null,
}

export const chatReducer = createFeature({
  name: CHAT_KEY,
  reducer: createReducer(
    initialState,
    // on(MessagesActions.loadMessagesSuccess, (state, {messages}) => ({
    //   ...state,
    //   messages: [...state.messages, ...messages],
    // })),

    on(MessagesActions.sendMessageSuccess, (state, {message}) => ({
      ...state,
      newMessage: {message: message.message},
    })),
    on(MessagesActions.sendMessageFailure, (state, {error}) => ({
      ...state,
      error,
    })),

    on(MessagesActions.connectSocketSuccess, (state, {message}) => ({
      ...state,
      messages: [...state.messages, message],
    })),
  ),
})
