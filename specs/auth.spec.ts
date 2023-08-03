import axios from "axios";
describe('Authorization & Authentication', ()=>{
    test('Sign in with existing credentials', async ()=>{
        const {status, data} = await axios.post(
            'http://localhost:3000/auth',
            {
                login: 'admin',
                password: 'admin'
            }
        )
        expect(status).toEqual(200)
        expect(data).toEqual({
            token: expect.any(String)
        })
    })
})