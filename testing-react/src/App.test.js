import addHits from './components/dashboard';

const {addHits} = require('./components/dashboard');
const assert = require('assert');

test('renders without a crash and burn', ()=> {
    render (<App/>);
});

test('Strikes found', ()=> {
    const {getByText} = render(<App/>);
    getByText(/strikes/i);
})

test('A hit is added and resets score', ()=> {
    let actual;
    let expected;
    actual = addHits(1)
    expected=2;
    expected(actual).toBe(expected);
})