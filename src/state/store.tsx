import {useReducer, createContext} from 'react';
import {initialState, reducer, State } from './reducer';
import {ActionsTypes} from './actions';
import { Character } from '../types/character';

interface Context {
  characters: Character[];
  currentPage: number;
  pageSize: number;
  hasNextPage: boolean;
  getNextPage: () => void;
  getAllCharactersSuccess: (characters: Character[]) => void;
}
export const CharactersContext = createContext({} as Context);

export const StoreProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const value: Context = {
    characters: (state as State).characters,
    currentPage: (state as State).currentPage,
    pageSize: (state as State).pageSize,
    hasNextPage: (state as State).hasNextPage,
    getNextPage: () => {dispatch({ type: ActionsTypes.Get_NEXT_PAGE })},
    getAllCharactersSuccess: (characters) => {dispatch({ type: ActionsTypes.GET_ALL_CHARACTERS, characters })},
  };

  return (
    <CharactersContext.Provider value={value}> 
      {children}
    </CharactersContext.Provider>
  )
};