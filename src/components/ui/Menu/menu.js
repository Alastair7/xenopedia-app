import React, { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import './menu.scss'

export default function AppTabMenu()
{
    const [activeIndex, setActiveIndex] = useState(3);
    const items = [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Copastes', icon: 'pi pi-fw pi-bookmark'},
        {label: 'TOP', icon: 'pi pi-fw pi-thumbs-up-fill'}
    ];

    return (
        <div className="apptabmenu">
            <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
        </div>
    )

}