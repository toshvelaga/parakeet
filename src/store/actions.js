// src/js/actions/index.js

import { ADD_TEXTAREA } from './action-types';

import { BTN_COLOR } from './action-types'

export function addTextarea(payload) {
    return { type: ADD_TEXTAREA, payload }
};

export function btnColor(payload) {
    return { type: BTN_COLOR, payload }
};