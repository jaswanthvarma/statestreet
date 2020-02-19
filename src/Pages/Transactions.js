import React, { useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import JSONData from '../data/data.json';
import TransactionsTable from '../components/TransactionsTable';
import Filters from '../components/Filters.js';

export default function Transactions() {
    const [data, setData] = useState(JSONData.transactions);
    const [accountNames, setAccountNames] = useState([]);
    const [transactionTypes, setTransactionTypes] = useState([]);

    const filterResults = (event) => {
        let name = event.target.name;
        let els = document.getElementsByName(name);
        let checked_values = [];
        for (let index = 0; index < els.length; index++) {
            if (els[index].checked === true) {
                //toLowerCase to remove case sensitive
                checked_values.push(els[index].value.toLowerCase())
            }
        }

        //filtering logic goes here for the json
        if (name === 'accountName') {
            setAccountNames(checked_values);
            let filter_data = [];
            //if any accountNames got checked
            if (checked_values.length > 0) {
                filter_data = JSONData.transactions.filter((element) => {
                    //toLowerCase to remove case sensitive
                    if (checked_values.indexOf(element.accountName.toLowerCase()) > -1) {
                        return true;
                    } else {
                        return false;
                    }
                });
            } else {
                filter_data = JSONData.transactions;
            }
            //if any transactionTypes got checked
            if (transactionTypes.length > 0) {
                let filtered_data = filter_data.filter((element) => {
                    //toLowerCase to remove case sensitive
                    if (transactionTypes.indexOf(element.transactionType.toLowerCase()) > -1) {
                        return true;
                    } else {
                        return false;
                    }
                });
                setData(filtered_data);
            } else {
                setData(filter_data);
            }
        } else if (name === 'transactionType') {
            setTransactionTypes(checked_values);
            let filter_data = [];
            //if any transactionTypes got checked
            if (checked_values.length > 0) {
                filter_data = JSONData.transactions.filter((element) => {
                    //toLowerCase to remove case sensitive
                    if (checked_values.indexOf(element.transactionType.toLowerCase()) > -1) {
                        return true;
                    } else {
                        return false;
                    }
                })
            } else {
                filter_data = JSONData.transactions;
            }
            //if any accountNames got checked
            if (accountNames.length > 0) {
                let filtered_data = filter_data.filter((element) => {
                    //toLowerCase to remove case sensitive
                    if (accountNames.indexOf(element.accountName.toLowerCase()) > -1) {
                        return true;
                    } else {
                        return false;
                    }
                });
                setData(filtered_data);
            } else {
                setData(filter_data);
            }
        }
    }
    return (
        <Container>
            <Row>
                <Col className="mt-3"><h2>My Transactions</h2></Col>
            </Row>
            <hr />
            <Row>
                <Col xs="2">
                    <Filters data={JSONData.transactions} filterResults={filterResults} />
                </Col>
                <Col xs="10">
                    <TransactionsTable data={data} />
                </Col>
            </Row>
        </Container>
    )
}