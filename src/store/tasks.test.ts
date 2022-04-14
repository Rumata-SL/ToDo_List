import {ActionType, dif, mul, salaryReducer, sub, sum} from "./tasks";

test("sum", ()=>{
    //1 тестовые данные
    const salary:number = 900
    const num:number = 200
    //2 выполнение тестируемого кода
    const result = sum(salary, num)
    //3 проверка результата
    expect(result).toBe(1100)
})
test("sub", ()=>{
    expect(sub(1200, 400)).toBe(800)
})
test("dif", ()=>{
    expect(dif(1200, 400)).toBe(3)
})
test("mul", ()=>{
    expect(mul(1200, 4)).toBe(4800)
})

test("test reducer", ()=>{
    const salary:number = 900
    const sumAction:ActionType={
        type:"SUM",
        n:300
    }
    const testAction:ActionType={
        type:"TEST",
        n:500
    }
    expect(salaryReducer(salary,sumAction)).toBe(1200)
})