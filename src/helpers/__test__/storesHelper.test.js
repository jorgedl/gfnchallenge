/* globals test expect */

import {
    getItemsByPage,
    getStoreItemSuffix,
    sortStoreList
} from '../storesHelper';

test('Pagination helper', () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const paginatedItems = getItemsByPage(list, 2, 3);
    expect(paginatedItems).toStrictEqual([7, 8, 9]);
});

describe('Item suffix', () => {
    it('revenue value lower than the filter should return lower', () => {
        const revenue = 1500;
        const filter = 1501;
        const suffix = getStoreItemSuffix(filter)({ revenue });
        expect(suffix).toBe('lower');
    });

    it('revenue value higher than the filter should return higher', () => {
        const revenue = 1501;
        const filter = 1500;
        const suffix = getStoreItemSuffix(filter)({ revenue });
        expect(suffix).toBe('higher');
    });
});

describe('List sorter', () => {
    const list = [
        {
            name: 'B',
            value: 4
        },
        {
            name: 'D',
            value: 3
        },
        {
            name: 'A',
            value: 5
        },
        {
            name: 'E',
            value: 2
        },
        {
            name: 'F',
            value: 1
        },
        {
            name: 'C',
            value: 4
        }
    ];
    it('sort by name desc', () => {
        const sortKeys = [
            {
                id: 'name',
                asc: false
            }
        ];
        const sortedList = sortStoreList(list, sortKeys);
        expect(sortedList).toStrictEqual([
            {
                name: 'A',
                value: 5
            },
            {
                name: 'B',
                value: 4
            },
            {
                name: 'C',
                value: 4
            },
            {
                name: 'D',
                value: 3
            },
            {
                name: 'E',
                value: 2
            },
            {
                name: 'F',
                value: 1
            }
        ]);
    });

    it('sort by name asc', () => {
        const sortKeys = [
            {
                id: 'name',
                asc: true
            }
        ];
        const sortedList = sortStoreList(list, sortKeys);
        expect(sortedList).toStrictEqual([
            {
                name: 'F',
                value: 1
            },
            {
                name: 'E',
                value: 2
            },
            {
                name: 'D',
                value: 3
            },
            {
                name: 'C',
                value: 4
            },

            {
                name: 'B',
                value: 4
            },
            {
                name: 'A',
                value: 5
            }
        ]);
    });

    it('sort by value desc and name desc', () => {
        const sortKeys = [
            {
                id: 'value',
                asc: true
            },
            {
                id: 'name',
                asc: true
            }
        ];
        const sortedList = sortStoreList(list, sortKeys);
        expect(sortedList).toStrictEqual([
            {
                name: 'A',
                value: 5
            },
            {
                name: 'C',
                value: 4
            },
            {
                name: 'B',
                value: 4
            },
            {
                name: 'D',
                value: 3
            },
            {
                name: 'E',
                value: 2
            },
            {
                name: 'F',
                value: 1
            }
        ]);
    });
});
