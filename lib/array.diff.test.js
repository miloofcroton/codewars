function array_diff(a, b) {

    dict = b.reduce((acc, item) => {
        acc.item = true;
        return acc;
    }, {});

    return a.reduce((acc, item) => {
        if(!dict.item) acc.item;
        return acc;
    }, []);
}


describe("Sample tests", function () {
    it("Should pass Sample tests", function () {
        assert.deepEqual(array_diff([], [4, 5]), [], "a was [], b was [4,5]");
        assert.deepEqual(array_diff([3, 4], [3]), [4], "a was [3,4], b was [3]");
        assert.deepEqual(array_diff([1, 8, 2], []), [1, 8, 2], "a was [1,8,2], b was []");
    });
}); 
