import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CHAT_KEY, ChatState} from "./chat.reducer";

export const selectChatState = createFeatureSelector<ChatState>(CHAT_KEY);

export const selectAllMessages = createSelector(
  selectChatState,
  (state) => state.messages,
);
