import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from  'primereact/column';
import './DataTable.scss';
import axios from 'axios';

export default function AppDataTable() {
    const [texts, setTexts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const pageSize = 10;

    const onPageChange = (event) => {
        setCurrentPage(event.first / event.rows);
    }

    const firstIndex = currentPage * pageSize;
    const lastIndex = firstIndex + pageSize;
    const currentData = texts.slice(firstIndex, lastIndex);

    useEffect(() => {
        getTextData();
    }, []);

    const getTextData = () => {

        axios.get("https://localhost:32768/Text/GetTextAll")
        .then((response) => {
            const totalRecords = response.data.length;

            setTotalPages(Math.ceil(totalRecords / pageSize))
            setTexts(response.data)
            setLoading(false);

        }).catch(error => {
            console.log(error);
            setLoading(false);
        });
    }

    return (
        <>
            <DataTable 
            value={currentData}
            rows={pageSize}
            loading={loading}
            paginator
            onPage={onPageChange}
            totalPages={totalPages}>
                <Column field="idText" header = 'ID' />
                <Column field="title" header = 'Title' />
                <Column field="createdBy" header = 'Created By' />
                <Column field="creationDate" header= 'Creation Date' />
            </DataTable>
        </>
    );
}