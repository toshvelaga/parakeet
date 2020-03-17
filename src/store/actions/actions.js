// src/js/actions/index.js

import { BTN_COLOR, TEXTAREA_TOGGLE } from '../constants/action-types'

export const btnColor = () => {
    return { type: BTN_COLOR }
};

export const textareaToggle = () => {
    return { type: TEXTAREA_TOGGLE }
}