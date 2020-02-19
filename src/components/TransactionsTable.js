import React from 'react';
import { Table } from 'reactstrap';
import { HashRouter as Router, Link, withRouter } from "react-router-dom";


export default withRouter(function TransactionsTable({ data }) {
    return (
        <Table bordered>
            <thead>
                <tr>
                    <th>ACCOUNT NO.</th>
                    <th>ACCOUNT NAME</th>
                    <th>CURRENCY</th>
                    <th>AMOUNT</th>
                    <th>TRANSACTION TYPE</th>
                </tr>
            </thead>
            <tbody>
                <Router>
                    {data.map((element, index) => {
                        return (<tr key={index}>
                            <td><Link to={`/view-transaction/${element.account}`} >{element.account}</Link></td>
                            <td>{element.accountName}</td>
                            <td>{element.currencyCode}</td>
                            <td>{element.amount}</td>
                            <td>{element.transactionType}</td>
                        </tr>);
                    })}
                </Router>
            </tbody>
        </Table>
    )
});