import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Card from "../Card";
import { Row, Col, Table as BootstrapTable } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

export function Table(props) {
  return (
    <>
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">{props.header}</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive border-bottom my-3">
                <BootstrapTable
                  responsive
                  striped
                  id="datatable"
                  className=""
                  data-toggle="data-table"
                >
                  <thead>
                    <tr>
                      {props.columns.map((item) => (
                        <th>{item}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {props.data.map((item) => {
                      return (
                        <tr key={item[props.keyColumn]}>
                          {props.columns.map((column) => (
                            <td>{item[column]}</td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </BootstrapTable>
                <Pagination dataCount={props.data.length} pageSize={10} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

Table.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  keyColumn: PropTypes.string,
};
