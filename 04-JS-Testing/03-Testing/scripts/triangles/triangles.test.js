import { Triangle } from "./triangles";

describe('Test to determine wheter or not a shape entered is a triangle', () =>{
    
    describe('equalateral triangle', () => {
        test('all sides are equal', () => {
            const triangle = new Triangle(2, 2, 2);
            expect(triangle.isEqualateral).toBe(true); //expect(triangle.isEqualateral()).toBe(true); is not getter invoke
        })

        test('no sides are equal', () =>{
            const triangle = new Triangle(5,4,6)
            expect(triangle.isEqualateral).toBe(false);
        })

        test('scalene triangle', () =>{
            const triangle = new Triangle(5,4,6)
            expect(triangle.isScalene).toBe(true);
        })

        test('not scalene', () =>{
            const triangle = new Triangle(1,1,6)
            expect(triangle.isScalene).toBe(false);
        })
    })
})