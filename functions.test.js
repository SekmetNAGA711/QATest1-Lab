const mytest = require('./functions')

test('should return 2', ()=>{
    expect(mytest.returnTwo()).toEqual(2)
})

test('should say hello to James and Jill', ()=>{
    expect(mytest.greeting('James')).toBe('Hello, James')
    expect(mytest.greeting('Jill')).toBe('Hello, Jill')
})

test('should add', ()=>{
    expect(mytest.add(1,2)).toEqual(3)
    expect(mytest.add(5,9)).toEqual(14)
})

