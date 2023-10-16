import { mount } from '@vue/test-utils';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { createTestingPinia } from '@pinia/testing';

import HelloWorld from '../components/HelloWorld.vue';
import { createPinia, setActivePinia } from 'pinia';

describe('HelloWorld', () => {
    beforeEach(() => {
        // creates a fresh pinia and make it active so it's automatically picked
        // up by any useStore() call without having to pass it to it:
        // `useStore(pinia)`
        setActivePinia(createPinia());
    });
    it('should render', () => {
        const wrapper = mount(HelloWorld, {
            props: {
                msg: 'Hello World',
            },
            global: {
                plugins: [
                    createTestingPinia({
                        createSpy: vi.fn,
                    }),
                ],
            },
        });
        console.log('+++++++++++');
        console.log('wrapper.text()', wrapper.text());

        expect(wrapper.text()).toContain('Hello World');
    });
});
