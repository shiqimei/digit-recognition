import axios from 'axios';

async function recognizeImage(base64String) {
    const { data } = await axios({
        headers: {
            'Content-Type': 'application/json'  
        },
        method: 'post',
        url: '/api',
        data: JSON.stringify(base64String)
    });
    return data;
}

export default {
    recognizeImage
}