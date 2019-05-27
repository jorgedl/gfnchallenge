import React, { useReducer, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import i18next from 'i18next';

// components
import Filters from '../../components/filters/Filter';
import StoreList from '../../components/storeList/StoreList';
import StoreMap from '../../components/storeMap/StoreMap';
import Pagination from '../../components/pagination/Pagination';

// reducers
import stores from '../reducers/stores';
import pages from '../reducers/pages';

// actions
import { fetchStores } from '../actions/stores';
import { updatePageCounter, setPage } from '../actions/pages';

// helpers
import {
    getItemsByPage,
    getStoreIconUrl,
    getStoreItemSuffix,
    sortStoreList,
    setSortId
} from '../../helpers/storesHelper';

// styles
import './StorePerformance.less';

const DEFAULT_REVENUE_FILTER = '15000';

const storeTableColumns = [
    {
        id: 'name',
        label: 'Nome'
    },
    {
        id: 'revenue',
        label: 'Faturamento'
    }
];

const SearchIcon = (
    <img className="search-icon" alt="Search icon" src="/images/search.svg" />
);

function StorePerformance(props) {
    const {
        location: { search: locationSearch },
        history
    } = props;

    const { query, revenue, page = 1 } = qs.parse(locationSearch);

    const pagesInitialState = {
        currentPage: parseFloat(page) - 1,
        pageSize: 10,
        totalPages: 0
    };

    // Since this data is only meant to work in this page, and not in the entire application, im using react's reducer.
    // If in the future other screens require this data, this need to be refactored using redux's providers or context API
    const [storeList, dispatch] = useReducer(stores, []);

    // Execute only on initialize, thats why second param is []
    useEffect(() => {
        fetchStores()(dispatch);
    }, []);

    // Setting name's and revenue's filter states
    const [revenueFilter, setRevenueFilter] = useState(
        revenue || DEFAULT_REVENUE_FILTER
    );
    const [nameFilter, setNameFilter] = useState(query);

    const [sortInfo, setSortInfo] = useState([]);

    const filteredList = storeList.filter(({ name }) => {
        if (name !== undefined && nameFilter !== undefined) {
            return name.toUpperCase().includes(nameFilter.toUpperCase());
        }
        return true;
    });

    let sortedList = filteredList;

    if (sortInfo.length > 0) {
        sortedList = sortStoreList(sortedList, sortInfo);
    }

    const [pagination, dispatchPages] = useReducer(pages, pagesInitialState);
    const { currentPage, totalPages, pageSize } = pagination;

    const paginatedList = getItemsByPage(sortedList, currentPage, pageSize);

    // On page update or filters update, im updating the URL, so the user can save it for later,
    // or share his current page the same way as he see
    useEffect(() => {
        const queryParams = {
            revenue: revenueFilter,
            query: nameFilter,
            page: currentPage + 1
        };
        const search = `?${qs.stringify(queryParams)}`;
        history.push({ search });
    }, [revenueFilter, nameFilter, currentPage]);

    // Update page counter when storeList is fetched and everytime name filter change
    useEffect(() => {
        const pageCount = filteredList.length;
        // Setting page as 0 to prevent staying in a page further than the new total
        updatePageCounter(pageCount)(dispatchPages);
    }, [storeList, nameFilter]);

    return (
        <div className="performance">
            <div className="performance__item">
                <Filters
                    placeholder={i18next.t('filters.search')}
                    icon={SearchIcon}
                    type="text"
                    value={nameFilter}
                    onChange={value => {
                        setPage(0)(dispatchPages);
                        setNameFilter(value);
                    }}
                />
            </div>
            <div className="performance__item">
                <Filters
                    onChange={value => {
                        setPage(0)(dispatchPages);
                        setRevenueFilter(value);
                    }}
                    label={i18next.t('filters.revenue')}
                    type="number"
                    value={revenueFilter}
                />
            </div>
            <div className="performance__item">
                <StoreList
                    items={paginatedList}
                    columns={storeTableColumns}
                    getStoreItemSuffix={getStoreItemSuffix(revenueFilter)}
                    onSort={id => setSortId(id, sortInfo, setSortInfo)}
                    sortInfo={sortInfo}
                />
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onChange={nextPage => setPage(nextPage)(dispatchPages)}
                />
            </div>
            <div className="performance__item">
                <StoreMap
                    getStoreIconUrl={getStoreIconUrl(revenueFilter)}
                    items={filteredList}
                />
            </div>
        </div>
    );
}

StorePerformance.propTypes = {
    location: PropTypes.shape({
        search: PropTypes.string
    }).isRequired,
    history: PropTypes.shape({}).isRequired
};

export default StorePerformance;
