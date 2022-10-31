import styled from "styled-components";

export const Container = styled.div`
    background-color: #29292e;
    display: flex;
    gap: 1rem;
    border-radius: 8px;
    padding: 1rem;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;

    button {
        background: transparent;
        border: 0;
        color: #8d8d99;
        line-height: 0;
        border-radius: 2px;
    }

    :hover button {
        color: red;
    }

`;