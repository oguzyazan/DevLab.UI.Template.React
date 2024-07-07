import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      dataCount: props.dataCount,
      pageSize: props.pageSize,
    };
  }

  prev = () => {
    if (this.state.currentPage > 1)
      this.setState({ currentPage: this.state.currentPage - 1 });
  };

  next = () => {
    let pageCount = this.getPageCount();
    if (this.state.currentPage < pageCount)
      this.setState({ currentPage: this.state.currentPage + 1 });
  };

  onClickPage = (pageNo) => {
    this.setState({ currentPage: pageNo });
  };

  getPageCount = () => {
    return Math.ceil(this.state.dataCount / this.state.pageSize);
  };

  getPageButtonElements = () => {
    let elements = [];

    for (let i = 0; i < this.getPageCount(); i++) {
      elements.push(
        <li
          className={
            this.state.currentPage == i + 1
              ? "paginate_button page-item active"
              : "paginate_button page-item"
          }
        >
          <Link
            to="#"
            aria-controls="datatable"
            aria-current={this.state.currentPage == i + 1 ? "page" : "false"}
            data-dt-idx={i + 1}
            tabIndex={this.state.currentPage}
            className="page-link"
            onClick={() => this.onClickPage(i + 1)}
          >
            {i + 1}
          </Link>
        </li>
      );
    }

    return elements;
  };

  render() {
    let { currentPage, pageSize, dataCount } = this.state;
    return (
      <Row className="align-items-center">
        <Col md="6">
          <div
            className="dataTables_info"
            id="datatable_info"
            role="status"
            aria-live="polite"
          >
            Showing {(currentPage - 1) * pageSize + 1} to{" "}
            {currentPage * pageSize} of {dataCount} entries
          </div>
        </Col>
        <Col md="6">
          <div
            className="dataTables_paginate paging_simple_numbers"
            id="datatable_paginate"
          >
            <ul className="pagination">
              <li
                className={
                  currentPage > 1
                    ? "paginate_button page-item previous"
                    : "paginate_button page-item previous disabled"
                }
                id="datatable_previous"
              >
                <Link
                  to="#"
                  aria-controls="datatable"
                  aria-disabled="true"
                  data-dt-idx="previous"
                  tabIndex="0"
                  className="page-link"
                  onClick={() => this.prev()}
                >
                  Previous
                </Link>
              </li>
              {this.getPageButtonElements()}
              <li
                className={
                  currentPage == this.getPageCount()
                    ? "paginate_button page-item next disabled"
                    : "paginate_button page-item previous"
                }
                id="datatable_next"
              >
                <Link
                  to="#"
                  aria-controls="datatable"
                  data-dt-idx="next"
                  tabIndex="0"
                  className="page-link"
                  onClick={() => this.next()}
                >
                  Next
                </Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    );
  }
}

Pagination.propTypes = {
  dataCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
};

export default Pagination;
