import React from 'react';
import { shallow } from 'enzyme';

import Pagination from '../Pagination';

describe('Pagination', () => {
    it('paginate with more than 5 pages', () => {
        const paginationMock = {
            currentPage: 43,
            pageSize: 1,
            totalPages: 71
        };

        const wrapper = shallow(<Pagination {...paginationMock} />);

        const items = wrapper.find('.pagination').children();

        expect(parseFloat(items.at(3).text())).toBe(43);
        expect(parseFloat(items.at(7).text())).toBe(71);
    });

    it('paginate less than 5 pages', () => {
        const paginationMock = {
            currentPage: 2,
            pageSize: 10,
            totalPages: 3
        };

        const wrapper = shallow(<Pagination {...paginationMock} />);

        const items = wrapper.find('.pagination').children();

        expect(parseFloat(items.at(1).text())).toBe(1);
        expect(parseFloat(items.at(2).text())).toBe(2);
        expect(items.at(5)).toEqual({});
    });

    it('paginate one page', () => {
        const paginationMock = {
            currentPage: 1,
            pageSize: 10,
            totalPages: 1
        };

        const wrapper = shallow(<Pagination {...paginationMock} />);

        const items = wrapper.find('.pagination').children();

        expect(parseFloat(items.at(1).text())).toBe(1);
    });

    it('click next page', () => {
        let expectedPage;

        const paginationMock = {
            currentPage: 1,
            pageSize: 10,
            totalPages: 10,
            onChange: page => {
                expectedPage = page;
                return expectedPage;
            }
        };

        const wrapper = shallow(<Pagination {...paginationMock} />);

        wrapper
            .find('.pagination .pagination__arrow')
            .at(1)
            .simulate('click');

        expect(expectedPage).toBe(2);
    });

    it('click previous page', () => {
        let expectedPage;

        const paginationMock = {
            currentPage: 5,
            pageSize: 10,
            totalPages: 10,
            onChange: page => {
                expectedPage = page;
                return expectedPage;
            }
        };

        const wrapper = shallow(<Pagination {...paginationMock} />);

        wrapper
            .find('.pagination .pagination__arrow')
            .at(0)
            .simulate('click');

        expect(expectedPage).toBe(4);
    });
});
