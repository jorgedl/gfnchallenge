const HIGHER_REVENUE_ICON = '/images/marker-blue.png';
const LOWER_REVENUE_ICON = '/images/marker-red.png';

function getItemsByPage(items, page, pageSize) {
    const initialItem = page * pageSize;
    const lastItem = (page + 1) * pageSize;
    return items.slice(initialItem, lastItem);
}

function getStoreIconUrl(revenueFilter) {
    return ({ revenue }) => {
        const value = parseFloat(revenueFilter);
        if (Number.isNaN(value) || revenue > value) {
            return HIGHER_REVENUE_ICON;
        }
        return LOWER_REVENUE_ICON;
    };
}

function getStoreItemSuffix(revenueFilter) {
    return ({ revenue }) => {
        const value = parseFloat(revenueFilter);
        if (Number.isNaN(value) || revenue > value) {
            return 'higher';
        }
        return 'lower';
    };
}

export { getItemsByPage, getStoreIconUrl, getStoreItemSuffix };
