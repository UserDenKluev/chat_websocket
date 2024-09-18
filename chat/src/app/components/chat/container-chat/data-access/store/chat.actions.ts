import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {IMessage, IMessage1} from "./chat.reducer";

export const MessagesActions = createActionGroup({
  source: 'MESSAGES',
  events: {
    'Load Messages': emptyProps(),
    'Load Messages Success': props<{ messages: IMessage[] }>(),
    'Load Messages Failure': props<{ error: string }>(),

    'Send Message': props<{ message: IMessage1 }>(),
    'Send Message Success': props<{ message: IMessage1 }>(),
    'Send Message Failure': props<{ error: string }>(),

    'Connect Socket': emptyProps(),
    'Connect Socket Success': props<{ message: IMessage1 }>(),
    'Connect Socket Failure': props<{ error: string }>(),
  }
});
