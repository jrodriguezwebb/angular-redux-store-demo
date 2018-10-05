import { tassign } from 'tassign';
import { INCREMENT, DECREMENT } from './actions';

export interface IMessagingState {
  newMessages: number;
}

export const MESSAGING_INITIAL_STATE: IMessagingState = {
  newMessages: 0
};

export function messagingReducer(state: IMessagingState = MESSAGING_INITIAL_STATE, action): IMessagingState {
  switch (action.type) {
    case INCREMENT: return increment(state);
    case DECREMENT: return decrement(state);
  }

  return state;
}

function increment(state) {
  return tassign(state, { newMessages: state.newMessages + 1 });
}

function decrement(state) {
  return tassign(state, { newMessages: state.newMessages - 1 });
}
