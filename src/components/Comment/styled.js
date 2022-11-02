import styled from "styled-components";

export const Container = styled.div`
    background-color: ${(props) => props.isDone ? "#177B00" : "#29292e"};
    display: flex;
    gap: 1rem;
    border-radius: 8px;
    padding: 1rem;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
    text-decoration: ${(props) => props.isDone  ? "line-through" : "none"};

    button {
        background: transparent;
        border: 0px;
        color: #8d8d99;
        line-height: 0;
        border-radius: 2px;
    }

    :hover button {
        color: red;
    }

    p{
        width: 80%;
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
    }
    
    .checkBox{
        width: 18px;
        height: 18px;
    }

`;