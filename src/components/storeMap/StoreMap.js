import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Leaflet from 'leaflet';

import './StoreMap.less';

let map;
const markers = {};

function getAbsentItemsToBeRemoved(items) {
    return Object.keys(markers).filter(
        markerId => !items.some(({ id }) => parseFloat(markerId) === id)
    );
}

const API_KEY =
    'pk.eyJ1Ijoiam9kZWx1Y2NhIiwiYSI6ImNqaXg3cmp5dzA3OHgzb3A0c204azJmcTkifQ.cSGd1yWJDHxfqrL7fL3YFA';

function StoreMap({ items, getStoreIconUrl }) {
    useEffect(() => {
        map = Leaflet.map('map', {
            center: [-23.595269, -46.669645],
            zoom: 11
        });
        Leaflet.tileLayer(
            `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${API_KEY}`,
            {
                id: 'mapbox.streets'
            }
        ).addTo(map);
    }, []);

    // This function will be executed everytime items array update, thats why we are observing [items]
    useEffect(() => {
        // Removing items rejected by filters from the map
        const itemsToBeRemoved = getAbsentItemsToBeRemoved(items);
        itemsToBeRemoved.forEach(id => {
            map.removeLayer(markers[id]);
            delete markers[id];
        });
        items.forEach(item => {
            const { latitude, longitude, name, id } = item;
            const iconUrl = getStoreIconUrl(item);

            const icon = Leaflet.icon({
                iconUrl,
                clickable: true
            });

            // If the item exists in markers object, it doesn't need to be re-rendered, just change its icon
            if (markers[id] !== undefined) {
                markers[id].setIcon(icon);
                return;
            }

            const popup = name;

            const marker = Leaflet.marker([latitude, longitude], {
                icon
            }).bindPopup(popup);

            markers[id] = marker;

            map.addLayer(marker);
        });
    }, [items]);

    return (
        <div className="store-map">
            <div id="map" />
        </div>
    );
}

StoreMap.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            revenue: PropTypes.number,
            latitude: PropTypes.number,
            longitude: PropTypes.number
        })
    ),
    getStoreIconUrl: PropTypes.func
};

StoreMap.defaultProps = {
    items: [],
    getStoreIconUrl: () => {}
};

export default StoreMap;
