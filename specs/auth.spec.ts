import axios, {AxiosRequestConfig} from "axios";
import {AuthRequestBody, AuthResponseBody} from "../api/auth";
const client = require('common/client')
describe('Authorization & Authentication', ()=> {
    test('Sign in with existing credentials', async () => {
        const config: AxiosRequestConfig<AuthRequestBody> = {
            url: 'http://localhost:3000/auth',
            method: 'post',
            data: {
                login: 'admin',
                password: 'admin'
            }
        }
        const {status, data} = await axios.request<AuthResponseBody>(config)

        expect(status).toEqual(200)
        expect(data).toEqual<AuthResponseBody>({
            token: expect.any(String)
        })
    })

    test('Authorization with invalid credentials', async () => {
        const config: AxiosRequestConfig<AuthRequestBody> = {
            url: 'http://localhost:3000/auth',
            method: 'post',
            data: {
                login: 'invalid',
                password: 'invalid'
            }
        }
        const {status, data} = await client.request(config)

        expect(status).toEqual(404)
        expect(data).toEqual<AuthResponseBody>({
            message: 'Wrong login or password.'
        })
    })
})