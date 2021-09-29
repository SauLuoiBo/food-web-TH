import { keyframes } from "styled-components";

export const move = keyframes`
    0%{
        transform:rotate(45deg) translateY(-40rem);
    }
`;

export const image = keyframes`
    0%, 100% {
    transform: scale(.9);
    border-radius: var(--border-radius-hover);
    }

    50% {
    transform: scale(.8);
    border-radius: var(--border-radius);
    }
`;
