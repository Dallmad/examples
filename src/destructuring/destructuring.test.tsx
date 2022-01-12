import {ManType} from "./destructuring";

let props:ManType;

beforeEach(() => {
    props = {
        name: 'Dima',
        age: 32,
        lessons: [{title: '1'}, {title: '2'},{title: '3'}],
        adress: {
            street: {
                title: 'Nezavisimosti str'
            }
        }
    }
})

test('', () => {
    const {age, lessons} = props;
    const {title} = props.adress.street;

    expect(age).toBe(32);
    expect(lessons.length).toBe(3)
    expect(title).toBe('Nezavisimosti str')
})
// eslint-disable-next-line jest/no-identical-title
test('',()=> {
    /*const l1 = props.lessons[0];
    const l2 = props.lessons[1];
    const l3 = props.lessons[2];*/

    const [ls3] = props.lessons;
    const [ls1,...restLessons] = props.lessons

    expect(ls1.title).toBe('1')
    //expect(l2.title).toBe('2')
    //expect(l3.title).toBe('3')
    expect(restLessons.length).toBe(2)

})