import React, { Fragment } from 'react';
import {
    Card, Form, FormGroup, Label, Input
} from 'reactstrap';

export default function Filters({ filterResults }) {

    return (
        <Fragment>
            <p className="font-weight-bolder">Filters</p>
            <Card className="p-2 rounded-0 mb-3 bg-grey border-0">
                <span className="font-weight-bolder">Account Name</span>
                <Form>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="accountName" onChange={filterResults} value="Savings Account" />{' '}
                            Savings Account
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="accountName" onChange={filterResults} value="Checking Account" />{' '}
                            Checking Account
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="accountName" onChange={filterResults} value="Auto Loan Account" />{' '}
                            Auto Loan Account
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="accountName" onChange={filterResults} value="Credit Card Account" />{' '}
                            Credit Card Account
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="accountName" onChange={filterResults} value="Investment Account" />{' '}
                            Investment Account
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="accountName" onChange={filterResults} value="Personal Loan Account" />{' '}
                            Personal Loan Account
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="accountName" onChange={filterResults} value="Money Market Account" />{' '}
                            Money Market Account
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="accountName" onChange={filterResults} value="Home Loan Account" />{' '}
                            Home Loan Account
                        </Label>
                    </FormGroup>
                </Form>
            </Card>
            <Card className="p-2 rounded-0 bg-grey border-0">
                <span className="font-weight-bolder">Transaction Type</span>
                <Form>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="transactionType" onChange={filterResults} value="deposit" />{' '}
                            Deposit
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="transactionType" onChange={filterResults} value="withdrawal" />{' '}
                            Withdrawl
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="transactionType" onChange={filterResults} value="invoice" />{' '}
                            Invoice
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="transactionType" onChange={filterResults} value="payment" />{' '}
                            Payment
                        </Label>
                    </FormGroup>
                </Form>
            </Card>
        </Fragment>
    )
}