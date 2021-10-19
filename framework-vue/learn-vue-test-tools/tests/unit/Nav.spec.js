import { mount } from '@vue/test-utils'
import Nav from '@/components/Nav.vue'

describe('Nav.vue', () => {
    it('renderiza enlace a perfil', () => {
        const wrapper = mount(Nav, {
            data(){
                return {
                    isLoggedIn: true,
                };
            },
        });

        const profileLink = wrapper.get("#profile");

        expect(profileLink.text()).toEqual("My Profile");
    });

    it('no renderiza enlace a perfil', () => {
        const wrapper = mount(Nav, {
            data() {
                return {
                    isLoggedIn: false,
                };
            },
        });

        const profileLink = wrapper.find("#profile");

        expect(profileLink.exists()).toBe(false);
    });
})