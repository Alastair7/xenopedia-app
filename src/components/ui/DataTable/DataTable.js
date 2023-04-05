import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from  'primereact/column';
import './DataTable.scss';
import axios from 'axios';

export default function AppDataTable() {
    const [texts, setTexts] = useState([]);
        
    useEffect(() => {
        axios.get("https://localhost:32768/Text/GetTextAll")
        .then((response) => {
            setTexts(response.data)
        });
    });
        
    return (
        <DataTable value={texts}>
        <Column field="idText" header = 'ID' />
        <Column field="title" header = 'Title' />
        <Column field="createdBy" header = 'Created By' />
        <Column field="creationDate" header= 'Creation Date' />
    </DataTable>
    );
}