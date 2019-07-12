import axios from 'axios';

async function recognizeImage(base64String) {
    return await axios.post('/api', base64String);
}

export default {
    recognizeImage
}