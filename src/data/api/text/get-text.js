import { useEffect, useState } from "react";
import { Axios } from "axios";

const Texts = () => {
    const [data, setData] = useState([]);
    useEffect(() => {

        Axios.get('https://localhost:32768/Text/GetTextAll')
        .then((response) => {
            console.log(response.data);
            setData(response.data);
        });
            
    }, [data]);

    if (!data) return null;

    return Texts;
}

export default Texts();

    