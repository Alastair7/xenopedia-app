import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Paginator } from 'primereact/paginator';
import { Column } from  'primereact/column';
import './DataTable.scss';
import axios from 'axios';

export default function AppDataTable() {
    const [texts, setTexts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const pageSize = 2;

    const onPageChange = (event) => {
        setCurrentPage(event.page);
    }
        
    useEffect(() => {
        axios.get("https://localhost:32768/Text/GetTextAll")
        .then((response) => {
            setTexts(response.data)
        });
    });

    console.log(texts)
        
    return (
        <>
            <DataTable 
            value={texts.slice(currentPage * pageSize, (currentPage + 1) * pageSize)} globalFilter
            rows={pageSize} 
            totalRecords={texts.length} 
            onPageChange={onPageChange}>
                <Column field="idText" header = 'ID' />
                <Column field="title" header = 'Title' />
                <Column field="createdBy" header = 'Created By' />
                <Column field="creationDate" header= 'Creation Date' />
            </DataTable>

            <Paginator first={currentPage * pageSize}
            rows={pageSize}
            totalRecords={texts.length}
            onPageChange={onPageChange} />
        </>
    );
}