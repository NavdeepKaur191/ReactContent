// function isEven(n) {
//     return n % 2 === 0;
// }

function isEven(n) {
    if (typeof n !== 'number') {
        return false;
    }
    return n % 2 === 0;
}

// Custom test function
function test(description, callback) {
    try {
        callback();
        console.log('✔️ ' + description);
    } catch (error) {
        console.error('❌ ' + description);
        console.error('   ' + error);
    }
}

// Custom expect function
function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`Expected ${expected} but received ${actual}`);
            }
        }
    };
}

// Test suite
test('isEven returns true for 2', () => {
    expect(isEven(2)).toBe(true);
});

test('isEven returns false for 3', () => {
    expect(isEven(3)).toBe(false);
});

test('isEven returns true for -4', () => {
    expect(isEven(-4)).toBe(true);
});

test('isEven returns false for -5', () => {
    expect(isEven(-5)).toBe(false);
});

test('isEven returns true for 0', () => {
    expect(isEven(0)).toBe(true);
});

test('isEven returns false for 7.5', () => {
    expect(isEven(7.5)).toBe(false);
});

test('isEven returns false for -8.6', () => {
    expect(isEven(-8.6)).toBe(false);
});

test('isEven returns true for 10', () => {
    expect(isEven(10)).toBe(true);
});

test('isEven returns false for -11', () => {
    expect(isEven(-11)).toBe(false);
});

test('isEven returns false for "12"', () => {
    expect(isEven("12")).toBe(false);
});