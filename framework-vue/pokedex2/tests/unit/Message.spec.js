import { mount } from "@vue/test-utils";
import Message from "@/components/Message.vue"

describe("Message.vue", () => {
    it("renderizar props.msg cuando se pase", () => {
        const wrapper = mount(Message, {
            props: {
                msg: "Hello friends"
            },
        });
        expect(wrapper.text()).toContain("Hello friends");
    });
});