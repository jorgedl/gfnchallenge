import React, { useReducer, useEffect } from 'react';

// components
import Filters from './Filter';
import StoreList from '../../components/storeList/StoreList';
import StoreMap from '../../components/storeMap/StoreMap';

// reducers
import stores from '../reducers/stores';

// actions
import { fetchStores } from '../actions/stores';

// styles
import './StorePerformance.less';

const SearchIcon = (
    <img className="search-icon" alt="Search icon" src="/images/search.svg" />
);

function StorePerformance() {
    const [storeList, dispatch] = useReducer(stores);

    useEffect(() => {
        fetchStores()(dispatch);
    }, []);

    return (
        <div className="performance">
            <div className="performance__item">
                <Filters
                    placeholder="Pesquisar"
                    icon={SearchIcon}
                    type="text"
                />
            </div>
            <div className="performance__item">
                <Filters label="Faturamento mínimo necessário" type="number" />
            </div>
            <div className="performance__item">
                <StoreList items={storeList} />
            </div>
            <div className="performance__item">
                <StoreMap />
            </div>
        </div>
    );
}

export default StorePerformance;
