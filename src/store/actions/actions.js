// src/js/actions/index.js

import { BAD_REVIEW, TEXTAREA_VALUE } from '../constants/action-types'

export const badReview = () => {
    return { type: BAD_REVIEW }
};

export const textareaValue = () => {
    return { type: TEXTAREA_VALUE }
}