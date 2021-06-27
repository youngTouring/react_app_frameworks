import styled from "styled-components";

const Wrapper = styled.div`
    height: 100%;
    margin: 0 12px;
    display: flex;
    align-items: center;
`;

const Line = styled.div`
    width: 1px;
    height: 80%;
    background-color: #e9e9e9;
`;

export default function SeparateLine() {
    return <Wrapper>
        <Line/>
    </Wrapper>
}