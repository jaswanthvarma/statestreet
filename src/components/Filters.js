import React, { Fragment } from 'react';
import {
    Card, FormGroup, Label, Input
} from 'reactstrap';

export default function Filters({ data, filterResults }) {
    return (
        <Fragment>
            <p className="font-weight-bolder">Filters</p>
            {getFilters(data, filterResults)}
        </Fragment>
    )
}

function getFilters(data, filterResults) {
    let accountNames = [];
    let transactionTypes = [];
    data.forEach(element => {
        if (accountNames.indexOf(element.accountName) < 0) {
            accountNames.push(element.accountName)
        }
        if (transactionTypes.indexOf(element.transactionType) < 0) {
            transactionTypes.push(element.transactionType)
        }
    });

    return (
        <Fragment>
            <Card className="p-2 rounded-0 bg-grey border-0 mb-3" >
                <span className="font-weight-bolder">Account Name</span>
                {accountNames.map((element,index) => {
                    return (
                        <FormGroup check key={`accountName_${index}`}>
                            <Label check>
                                <Input type="checkbox" name="accountName" onChange={filterResults} value={element} />{' '}
                                {element}
                            </Label>
                        </FormGroup>
                    )
                })}
            </Card>
            <Card className="p-2 rounded-0 bg-grey border-0" >
                <span className="font-weight-bolder">Transaction Type</span>
                {transactionTypes.map((element,index) => {
                    return (
                        <FormGroup check key={`transactionType_${index}`}>
                            <Label check>
                                <Input type="checkbox" name="transactionType" onChange={filterResults} value={element} />{' '}
                                {element}
                            </Label>
                        </FormGroup>
                    )
                })}
            </Card>
        </Fragment>
    );
}