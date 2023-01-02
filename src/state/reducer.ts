import { Character } from '../types/character';
import { ActionsTypes, ActionsOptions } from "./actions";

export interface State {
  data: Character[];
  characters: Character[];
  currentPage: number;
  pageSize: number;
  hasNextPage: boolean;
}

export const initialState: State = {
  data: [],
  characters: [],
  currentPage: 1,
  pageSize: 4,
  hasNextPage: false,
};



export const reducer = (state: State = initialState, action: ActionsOptions): State => {
  switch (action.type) {
    case ActionsTypes.GET_ALL_CHARACTERS:{
      return {
        ...state,
        data: action.characters,
        characters: action.characters.slice(0, (state.pageSize*state.currentPage)),
        hasNextPage: (action.characters.length / state.pageSize) > state.currentPage,
      };
    }
    case ActionsTypes.Get_NEXT_PAGE: {
      const nextPage = state.currentPage +1
      return {
        ...state,
        currentPage: nextPage,
        characters: state.data.slice(0, (state.pageSize*nextPage)),
        hasNextPage: (state.data.length / state.pageSize) > nextPage,
      };
    }
    default:
      return state;
  }
};

  
