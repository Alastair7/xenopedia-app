import React from 'react';
import Moment from 'moment';
import { DataTable } from 'primereact/datatable';
import { Column } from  'primereact/column';
import './DataTable.scss';
import { response } from '../../../data/api/text/get-text.js'

export default function AppDataTable() {

    const date = Moment();
    var data = response;

    const APIData = [{'idText':1, 'title':'Test', 'createdBy': 'Fyrek', 'creationDate': date.format('DD/MM/yyyy')}];
    return (
        <DataTable value= {data} tableStyle= {{ minwidth: '50rem'}}>
            <Column field='idText' header='Id'></Column>
            <Column field='title' header='Title'></Column>
            <Column field='createdBy' header='CreatedBy'></Column>
            <Column field='creationDate' header='CreationDate'></Column>
        </DataTable>
    );
}