import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { jumpProductPage } from '../../../../state/ducks/products/actions';


const ProductPagination = () => {


  const currentPage = useSelector( ({ products }) => (products.currentPage));
  const max_pages = useSelector( ({ products }) => (products.max_pages));
  const dispatch = useDispatch();

  const pages = [...Array(max_pages).keys()];


  return (
    <div className='products__navigation'>
      <nav className="pagination is-right is-small" role="navigation" aria-label="pagination">
        <button
          className="pagination-previous">
          Previous
        </button>
        <button
          className="pagination-next">
          Next page
        </button>
        <ul className="pagination-list">

          {
            pages.map( (page) => {

              if (currentPage === page+1) {
                return (
                  <li key={`page-${page+1}`}>
                    <button className="pagination-link is-current"
                            aria-label={`page ${page+1}`}
                            aria-current="page"
                    >{page+1}</button>
                  </li>
                )
              } else {
                return (
                  <li key={`page-${page+1}`}>
                    <button className="pagination-link"
                            aria-label={`Goto page ${page+1}`}
                            onClick={() => dispatch(jumpProductPage(page+1))}
                    >{page+1}</button>
                  </li>
                )
              }

              })
          }
        </ul>
      </nav>
    </div>
  );
};

ProductPagination.propTypes = {
  currentPage: PropTypes.number,
};

export default ProductPagination;
