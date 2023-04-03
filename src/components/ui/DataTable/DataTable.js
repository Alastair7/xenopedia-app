import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from  'primereact/column';
import './DataTable.scss';
import Texts from '../../../data/api/text/get-text';

export default function AppDataTable() {

    return (
        <DataTable value={Texts}>
            {Texts.map((col, i) => (
                <Column key={col.field} field={col.field} header={col.header} />
            ))}
        </DataTable>
    );
}