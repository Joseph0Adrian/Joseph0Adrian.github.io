import { mount } from "@vue/test-utils";
import TodoApp from "@/components/TodoApp.vue"

describe("TodoApp.vue", () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(TodoApp);
    });

    it("se renderiza todo text", () => {
        const todo = wrapper.get('[data-test="todo"]');

        expect(todo.text()).toBe("learn vue testing");
    });
    
    it("agrega nuevo todo", async() => {
        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1);

        await wrapper.get('[data-test="new-todo"]').setValue('New Todo')
        await wrapper.get('[data-test="form"]').trigger('submit')

        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);
    });

    it("permite completar una tarea a realizar", async() => {
        await wrapper.get('[data-test="todo-checkbox"]').setValue(true);

        expect(wrapper.get('[data-test="todo"]').classes()).toContain("completed");
    });
})