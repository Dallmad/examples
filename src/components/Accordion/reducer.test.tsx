import {reducer, StateType, TOGGLE_CONSTANT} from './reducer';


test('render should change value to opposite value', () => {
    const state: StateType = {
        collapsed: false
    }
    const newState = reducer(state, {type: TOGGLE_CONSTANT})
    expect(newState.collapsed).toBe(true)
})
test('collapsed should be false', () => {
    const state: StateType = {
        collapsed: false
    }
    expect(()=>{reducer(state,{type:'FAKE-TYPE'})}).toThrowError()
})