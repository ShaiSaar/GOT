import {reducer, initialState} from './reducer';
import {ActionsTypes} from './actions';

describe('Test reducer with invalid data', () => {
  it('should return the initial state due to empty obj', () => {
    expect(reducer(initialState, {} as any)).toEqual({...initialState});
  });

  it('should return the initial state due to type not included in reducer', () => {
    expect(reducer(initialState, { type: 'test' } as any)).toEqual({...initialState});
  });
})

describe('Test reducer when setting new list of characters with page size 4', () => {
  it('should return state with empty array and hasNextPage false', () => {
    expect(reducer(initialState, { type: ActionsTypes.GET_ALL_CHARACTERS, characters: []})).toEqual({...initialState});
  });

  it('should return state with array with 1 character and hasNextPage false', () => {
    expect(reducer(initialState, { type: ActionsTypes.GET_ALL_CHARACTERS, characters: new Array(1)}))
    .toEqual({...initialState, data: new Array(1) ,characters: new Array(1)});
  });

  it('should return state with array of 20 and hasNextPage true', () => {
    expect(reducer(initialState, { type: ActionsTypes.GET_ALL_CHARACTERS, characters: new Array(20)}))
    .toEqual({...initialState, data: new Array(20), characters: new Array(4), hasNextPage: true});
  });
})

describe('Test reducer when setting next page with page size 4', () => {
  it('should increase the currentPage by 1 and hasNextPage true', () => {
    expect(reducer({data: new Array(20), characters: new Array(4), currentPage: 1, pageSize: 4, hasNextPage: true}, { type: ActionsTypes.Get_NEXT_PAGE }))
    .toEqual({data: new Array(20), characters: new Array(8), currentPage: 2, pageSize: 4, hasNextPage: true});
  });

  it('should increase the currentPage by 1 and hasNextPage false', () => {
    expect(reducer({data: new Array(10), characters: new Array(8), currentPage: 2, pageSize: 4, hasNextPage: true}, { type: ActionsTypes.Get_NEXT_PAGE }))
    .toEqual({data: new Array(10), characters: new Array(10), currentPage: 3, pageSize: 4, hasNextPage: false});
  });
})
  
