import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import JSONData from '../data/data.json';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ViewTransaction() {
    const { account_no } = useParams();
    const [transaction] = useState(JSONData.transactions.filter((element) => element.account === account_no));
    return (
        <Container>
            <Row>
                <Col className="mt-3">
                    <h2 className="float-left" >Transaction {account_no}</h2>
                    <Link to="/">
                        <button className="btn btn-primary float-right"> {`Back To Transactions`}</button>
                    </Link>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col xs="12">
                    <div><span className="font-weight-bolder">Account No.: </span>{transaction[0].account}</div>
                    <div><span className="font-weight-bolder">Account Name: </span>{transaction[0].accountName}</div>
                    <div><span className="font-weight-bolder">Currency Code: </span>{transaction[0].currencyCode}</div>
                    <div><span className="font-weight-bolder">Amount: </span>{transaction[0].amount}</div>
                    <div><span className="font-weight-bolder">Transaction Type: </span>{transaction[0].transactionType}</div>
                </Col>
            </Row>
        </Container>
    )
}