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

function setSortId(id, sortArr, callback) {
    let list = Object.assign([], sortArr);
    const sortItem = list.find(({ id: sortId }) => sortId === id);
    if (sortItem === undefined) {
        list.push({
            id,
            asc: false
        });
    } else if (!sortItem.asc) {
        sortItem.asc = true;
    } else {
        list = list.filter(({ id: sortId }) => id !== sortId);
    }
    callback(list);
}

// Sort function.
// This way it will preserve sort priority. Second field sort will only be priority after you unsort the first.
function sortStoreList(list, keys) {
    return list.sort((a, b) => {
        let sortResult = 0;
        keys.forEach(({ id, asc }) => {
            if (sortResult !== 0) return;
            if (a[id] < b[id]) sortResult = -1;
            if (a[id] > b[id]) sortResult = 1;
            if (asc) {
                sortResult *= -1;
            }
        });
        return sortResult;
    });
}

export {
    getItemsByPage,
    getStoreIconUrl,
    getStoreItemSuffix,
    sortStoreList,
    setSortId
};
