import React from 'react';
import { Link } from "react-router-dom";
import DataTable, { createTheme } from 'react-data-table-component';

createTheme('solarized', {
    header:{
        display:'none',
    }
});
export default function TransactionsTable({ data }) {
    const columns = [
        {
            name: 'ACCOUNT NO.',
            selector: 'account',
            cell: el => <Link to={`/view-transaction/${el.account}`}>{el.account}</Link>,
            sortable: true,
        },
        {
            name: 'ACCOUNT NAME',
            selector: 'accountName',
            sortable: true,
        },
        {
            name: 'CURRENCY',
            selector: 'currencyCode',
            sortable: true,
        },
        {
            name: 'AMOUNT',
            selector: 'amount',
            sortable: true,
        },
        {
            name: 'TRANSACTION TYPE',
            selector: 'transactionType',
            sortable: true,
        }
    ];
    return (
        <DataTable
            columns={columns}
            data={data}
            pagination
        />
    )
}