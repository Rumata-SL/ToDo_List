import {userReducer} from "./userReducer";

test("user reducer should increment only age", () => {
    const startState = {age: 20, childrenCount: 2, name: "Sergey"};
    const endState = userReducer(startState, {type: "INCREMENT-AGE"})

    expect(endState.age).toBe(21)
    expect(endState.childrenCount).toBe(2)
});

test("user reducer should increment childrenCount", () => {
    const startState = {age: 20, childrenCount: 2, name: "Sergey"};
    const endState = userReducer(startState, {type: "INCREMENT-CHILDREN-COUNT"});

    expect(endState.age).toBe(20)
    expect(endState.childrenCount).toBe(3)
})

test("user reduser chould refactor name", () => {
    const startState = {age: 21, childrenCount: 2, name: "Sergey"};
    let newName = "Max"
    const endState = userReducer(startState, {type: "REFACTOR-NAME", name: newName});

    expect(endState.age).toBe(21)
    expect(endState.childrenCount).toBe(2)
    expect(endState.name).toBe("Max")
})