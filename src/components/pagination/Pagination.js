import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Pagination.less';

const arrowLeft = <img alt="Paginar para a esquerda" src="/images/left.svg" />;
const arrowRight = <img alt="Paginar para a direita" src="/images/right.svg" />;

const nextPageFn = (current, totalPages) =>
    current + 1 > totalPages - 1 ? totalPages - 1 : current + 1;
const previousPageFn = current => (current - 1 < 0 ? 0 : current - 1);

function Pagination({ currentPage, totalPages, onChange }) {
    const baseClassName = 'pagination__button';

    const leftArrowClasses = classNames('pagination__arrow', {
        [`pagination__arrow--disabled`]: currentPage === 0
    });

    const rightArrowClasses = classNames('pagination__arrow', {
        [`pagination__arrow--disabled`]: currentPage === totalPages - 1
    });

    const currentClassName = classNames(
        baseClassName,
        `${baseClassName}--current`
    );

    const spreadElement = '...';

    // Im ashamed of this logic. At least it covers all scenarios of existing pages.
    // Entering an unexisting page may break the page counter, this can be fixed in the future
    // (or just prevent the user from entering a non existing page in the URL)
    return (
        <div className="pagination">
            <button
                type="button"
                onClick={() =>
                    onChange(previousPageFn(currentPage, totalPages))
                }
                className={leftArrowClasses}
            >
                {arrowLeft}
            </button>
            {currentPage > 0 && (
                <button
                    type="button"
                    onClick={() => onChange(0)}
                    className={baseClassName}
                >
                    1
                </button>
            )}
            {currentPage > 2 && totalPages > 5 && spreadElement}
            {currentPage > 1 &&
                totalPages <= 5 &&
                totalPages > 4 &&
                currentPage > totalPages - 2 && (
                    <button
                        type="button"
                        onClick={() => onChange(currentPage - 3)}
                        className={baseClassName}
                    >
                        {currentPage - 2}
                    </button>
                )}
            {currentPage > 1 &&
                currentPage > totalPages - 3 &&
                totalPages > 3 &&
                currentPage - 2 > 0 && (
                    <button
                        type="button"
                        onClick={() => onChange(currentPage - 2)}
                        className={baseClassName}
                    >
                        {currentPage - 1}
                    </button>
                )}
            {currentPage > 1 && (
                <button
                    type="button"
                    onClick={() => onChange(currentPage - 1)}
                    className={baseClassName}
                >
                    {currentPage}
                </button>
            )}
            <button type="button" className={classNames(currentClassName)}>
                {currentPage + 1}
            </button>
            {currentPage < totalPages - 2 && (
                <button
                    type="button"
                    onClick={() => onChange(currentPage + 1)}
                    className={baseClassName}
                >
                    {currentPage + 2}
                </button>
            )}
            {(currentPage === 0 || (totalPages <= 5 && currentPage < 2)) &&
                totalPages > 4 && (
                    <button
                        type="button"
                        onClick={() => onChange(currentPage + 2)}
                        className={baseClassName}
                    >
                        {currentPage + 3}
                    </button>
                )}
            {currentPage < totalPages - 3 && totalPages > 5 && spreadElement}
            {currentPage === 0 && totalPages <= 5 && totalPages > 3 && (
                <button
                    type="button"
                    onClick={() => onChange(totalPages - 2)}
                    className={baseClassName}
                >
                    {totalPages - 1}
                </button>
            )}
            {currentPage < totalPages - 1 && (
                <button
                    type="button"
                    onClick={() => onChange(totalPages - 1)}
                    className={baseClassName}
                >
                    {totalPages}
                </button>
            )}
            <button
                type="button"
                onClick={() => onChange(nextPageFn(currentPage, totalPages))}
                className={rightArrowClasses}
            >
                {arrowRight}
            </button>
        </div>
    );
}

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onChange: PropTypes.func
};

Pagination.defaultProps = {
    onChange: () => {}
};

export default Pagination;
