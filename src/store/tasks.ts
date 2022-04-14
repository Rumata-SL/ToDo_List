export const sum = (salary: number, num: number) => {
    return salary + num;
}
export const sub = (salary: number, num: number) => {
    return salary - num;
}
export const dif = (salary: number, num: number) => {
    return salary / num;
}
export const mul = (salary: number, num: number) => {
    return salary * num;
}


export type ActionType ={
    type: "MUL"|"TEST"|"DIV"|"SUB"|"SUM"
    n: number
}
export type StateTape =number

export const salaryReducer = (state: StateTape, action: ActionType):StateTape => {
    switch (action.type) {
        case "SUM":
            return state + action.n
        case "SUB":
            return state - action.n
        case "DIV":
            return state / action.n
        case "MUL":
            return state * action.n
        default:
            return state
    }
}
