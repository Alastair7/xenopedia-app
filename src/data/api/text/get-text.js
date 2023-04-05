import Axios from "axios";

export const GetTexts = async () => {
    let response = await Axios.get('https://localhost:32768/Text/GetTextAll');

    return response.data;
};

    