import {reducer, StateType} from "./reducer";

test('reducer should change value to true', () => {

    const startState:StateType = {
        collapsed: false
    }

    const newState = reducer(startState, {type: 'TOGGLE-COLLAPSED'})

    expect(newState.collapsed).toBe(true)
})

test('reducer should change value to false', () => {

    const startState:StateType = {
        collapsed: true
    }

    const newState = reducer(startState, {type: 'TOGGLE-COLLAPSED'})

    expect(newState.collapsed).toBe(false)
})