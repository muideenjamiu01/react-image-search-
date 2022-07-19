import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID rG1LNb3E_isy9P0aGKELb-iKCS2dL1WsMDPEh6eiqQM'
    }
});



