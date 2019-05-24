import React, { useEffect } from 'react';
import Leaflet from 'leaflet';

import './StoreMap.less';

let map = null;

const API_KEY =
    'pk.eyJ1Ijoiam9kZWx1Y2NhIiwiYSI6ImNqaXg3cmp5dzA3OHgzb3A0c204azJmcTkifQ.cSGd1yWJDHxfqrL7fL3YFA';

function StoreMap() {
    useEffect(() => {
        map = Leaflet.map('map', {
            center: [-22.907104, -47.06324],
            zoom: 13
        });
        Leaflet.tileLayer(
            `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${API_KEY}`,
            {
                attribution: 'Map data &copy; [...]',
                maxZoom: 18,
                id: 'mapbox.streets'
            }
        ).addTo(map);
    }, []);

    return (
        <div className="store-map">
            <div id="map" />
        </div>
    );
}

export default StoreMap;
