import { Button } from 'primereact/button'

export default function AddButton(props) {

    return (
        <Button label='Add' icon='pi pi-plus' iconPos='left' onClick={props.onClick}/>
    );
};