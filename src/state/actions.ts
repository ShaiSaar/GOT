import { Character } from "../types/character";

export enum ActionsTypes {
  Get_NEXT_PAGE= "Get_NEXT_PAGE",
  GET_ALL_CHARACTERS= "GET_ALL_CHARACTERS",
};
  
type GetNextPageAction = { type: ActionsTypes.Get_NEXT_PAGE }
type GetAllCharactersAction = { type: ActionsTypes.GET_ALL_CHARACTERS; characters: Character[] }

export type ActionsOptions = GetAllCharactersAction | GetNextPageAction ;