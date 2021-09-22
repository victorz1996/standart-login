import { shallowMount } from '@vue/test-utils'
import Login from '@/components/login/login.vue'

describe('Login', () => {
  const $t = () => { }
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Login, {
      mocks: { $t }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
