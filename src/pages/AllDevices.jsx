import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import ReactPaginate from 'react-paginate';
import products from '../assets/fake-data/products';
import ProductCard from '../components/UI/product-card/ProductCard';

import '../styles/all-devices.css';
import '../styles/pagination.css';

const AllDevices = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(0);

  //pagination
  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = products.slice(visitedPage, visitedPage + productPerPage);

  const pageCount = Math.ceil(products.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="All-Devices">
      <CommonSection title="All Devices" />

      <section>
        <Container>
          <Row className="mt-4">
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {displayPage

              ?.filter((item) => {
                if (searchTerm.value === '') return item;
                if (item.title.toLowerCase().includes(searchTerm.toLowerCase()))
                  return item;
              })

              .map((item) => (
                <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                  {' '}
                  <ProductCard item={item} />
                </Col>
              ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel="<"
                nextLabel=">"
                containerClassName="paginationBttns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllDevices;
