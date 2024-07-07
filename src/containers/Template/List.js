import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "../../components/";

const data = [
  {
    name: "Airi Satou",
    position: "Accountant",
    office: "Tokyo",
    age: "33",
    startdate: "2008/11/28",
    salary: "$162,700",
  },
  {
    name: "Angelica Ramos",
    position: "Chief Executive Officer (CEO)",
    office: "London",
    age: "47",
    startdate: "2009/10/09",
    salary: "$1,200,000",
  },
  {
    name: "Ashton Cox",
    position: "Junior Technical Author",
    office: "San Francisco",
    age: "66",
    startdate: "2009/01/12",
    salary: "$86,000",
  },
  {
    name: "Bradley Greer",
    position: "Software Engineer",
    office: "London",
    age: "41",
    startdate: "2012/10/13",
    salary: "$132,000",
  },
  {
    name: "Brenden Wagner",
    position: "Software Engineer",
    office: "San Francisco",
    age: "28",
    startdate: "2011/06/07",
    salary: "$206,850",
  },
  {
    name: "Brielle Williamson",
    position: "Integration Specialist",
    office: "New York",
    age: "61",
    startdate: "2012/12/02",
    salary: "$372,000",
  },
  {
    name: "Bruno Nash",
    position: "Software Engineer",
    office: "London",
    age: "38",
    startdate: "2011/05/03",
    salary: "$163,500",
  },
  {
    name: "Caesar Vance",
    position: "Pre-Sales Support",
    office: "New York",
    age: "21",
    startdate: "2011/12/12",
    salary: "$106,450",
  },
  {
    name: "Cara Stevens",
    position: "Sales Assistant",
    office: "New York",
    age: "46",
    startdate: "2011/12/06",
    salary: "$145,600",
  },
  {
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    age: "22",
    startdate: "2012/03/29",
    salary: "$433,060",
  },
];

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Table
        header="Table Component"
        data={data}
        columns={["name", "position", "office", "age", "startdate", "salary"]}
        keyColumn="age"
      />
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(List);
