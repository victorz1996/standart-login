import { shallowMount } from '@vue/test-utils'
import Home from '@/components/home/home.vue'

describe('Login', () => {
    const $auth = {
        user: {
            firstName: 'victor',
            login: '2673'
        }
    }
    const wrapper = shallowMount(Home, {
        mocks: { $auth }
    })
    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })
    // test('get list of zonasSitecs', () => {
    //     expect(wrapper.vm.zonas).toBe(3)
    // })
})
