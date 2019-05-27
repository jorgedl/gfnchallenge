import { getAbsentItemsToBeRemoved } from '../StoreMap';

describe('StoreMap', () => {
    it('remove items from next render', () => {
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

        const markers = { 0: 'marker', 1: 'marker', 2: 'Absent item' };

        const itemsToBeBeRemoved = getAbsentItemsToBeRemoved(markers, stores);

        expect(markers[itemsToBeBeRemoved[0]]).toBe('Absent item');
    });
});
