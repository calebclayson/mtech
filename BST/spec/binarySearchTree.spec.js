let BinarySearchTree = require('../src/binarySearchTree');

describe('BinarySearchTree', () => {

    beforeEach(() => {
        binarySearchTree = new BinarySearchTree();
    })

    describe('returns min point correctly', () => {
        binarySearchTree.insert(5);
        binarySearchTree.insert(4);
        binarySearchTree.insert(9);
        expect(binarySearchTree.min().toEqual(4));
    })
    describe('returns max point correctly', () => {
        binarySearchTree.insert(5);
        binarySearchTree.insert(4);
        binarySearchTree.insert(9);
        expect(binarySearchTree.min().toEqual(9));
    })
})