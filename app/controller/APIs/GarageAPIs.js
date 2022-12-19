import axios from 'axios'

export default class GarageAPIs {
    static endpoints = {
        getUser: 'https://reqres.in/api/users?page=1',
        getDetailUser: 'https://reqres.in/api/users/2'
    }

    static getUser = async () =>{
        try {
            let response = await axios .get(this.endpoints.getUser)
            return Promise.resolve(response.data?.data)
        } catch (error) {
            console.log("Error call api");
            console.log(error);
            return Promise.reject(error)
        }
    }
}