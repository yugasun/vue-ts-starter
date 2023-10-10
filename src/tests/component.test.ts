import { mount } from '@vue/test-utils';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { createTestingPinia } from '@pinia/testing';

import LoginButton from '../components/LoginButton.vue';
import { createPinia, setActivePinia } from 'pinia';

describe('LoginButton', () => {
    beforeEach(() => {
        // creates a fresh pinia and make it active so it's automatically picked
        // up by any useStore() call without having to pass it to it:
        // `useStore(pinia)`
        setActivePinia(createPinia());
    });
    it('should render', () => {
        const wrapper = mount(LoginButton, {
            global: {
                plugins: [
                    createTestingPinia({
                        createSpy: vi.fn,
                    }),
                ],
            },
        });
        expect(wrapper.text()).toContain('Login');
    });

    it('should be interactive', async () => {
        const wrapper = mount(LoginButton, {
            global: {
                plugins: [
                    createTestingPinia({
                        createSpy: vi.fn,
                    }),
                ],
            },
        });
        await wrapper.get('#login-btn').trigger('click');
        expect(wrapper.get('#login-dialog').isVisible()).toBe(true);
    });
});
