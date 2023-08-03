import axios, {AxiosRequestConfig} from "axios";
import {AuthRequestBody, AuthResponseBody} from "../api/auth";
describe('Authorization & Authentication', ()=>{
    test('Sign in with existing credentials', async ()=>{
        // const {status, data} = await axios.post(
        //     'http://localhost:3000/auth',
        //     {
        //         login: 'admin',
        //         password: 'admin'
        //     }
        // )
        const config: AxiosRequestConfig<AuthRequestBody> = {
            url:'http://localhost:3000/auth',
            method: 'post',
            data: {
                login: 'admin',
                password: 'admin'
            }
        }
         const{status, data} = await axios.request<AuthResponseBody>(config)

        expect(status).toEqual(200)
        expect(data).toEqual<AuthResponseBody>({
            token: expect.any(String)
        })
    })
})