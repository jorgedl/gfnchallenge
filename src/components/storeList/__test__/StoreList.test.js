import React from 'react';
import { shallow } from 'enzyme';

import StoreList from '../StoreList';

const stores = [
    {
        id: 0,
        name: 'A',
        revenue: 1,
        latitude: 1,
        longitude: -1
    },
    {
        id: 1,
        name: 'B',
        revenue: 100,
        latitude: 1,
        longitude: -1
    }
];

const columns = [
    {
        id: 'name',
        label: 'Nome'
    },
    {
        id: 'latitude',
        label: 'Longitude'
    },
    {
        id: 'revenue',
        label: 'Faturamento'
    },
    {
        id: 'longitude',
        label: 'longitude'
    }
];

describe('StoreList', () => {
    it('render dynamic headers', () => {
        const wrapper = shallow(<StoreList items={stores} columns={columns} />);

        const items = wrapper.find('.store-list').children();
        expect(items.at(0).text()).toBe('Nome');
        expect(items.at(2).text()).toBe('Faturamento');
    });

    it('headerless table', () => {
        const wrapper = shallow(<StoreList items={stores} />);

        const items = wrapper.find('.store-list').children();
        expect(items.at(0)).toEqual({});
    });
});
