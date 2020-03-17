// src/js/actions/index.js

import { BTN_COLOR, TEXTAREA_TOGGLE } from './action-types'

export function btnColor(payload) {
    return { type: BTN_COLOR, payload }
};

export function textareaToggle(payload) {
    return { type: TEXTAREA_TOGGLE, payload }
}