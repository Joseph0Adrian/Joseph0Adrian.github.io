import { mount } from "@vue/test-utils";
import Parent from "@/components/Parent.vue"

describe("Parent.vue", () => {

    it("", () => {
        const wrapper = mount(Parent);

        expect(wrapper.text()).toContain("Child");
    });
})