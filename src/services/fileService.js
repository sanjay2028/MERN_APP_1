import axios from 'axios';

const server = "http://localhost:5000/api/file";

const fileService = {
    create : (params) => {
        return axios
                .post(`${server}`, {responseType: 'json', params})
                .then(({data}) => {
                    if(data.success){
                        return {success : true, message : data.message}
                    } else {
                        return {success : false, message : data.message}
                    }
                
            }).catch(error => ({error : true, message : error}));
    }
}

export default fileService;