import styled from "styled-components";
import Color from "../../../shared/styleHelpers/Colors";

const ItemsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 12px;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 30px;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
`;

const ItemImage = styled.img`
    width: 22px;
    margin: 0 12px;
    height: auto;
`;

const ItemText = styled.span`
    font-weight: 700;
    font-size: 0.9rem;
    color: ${Color.darkBlue};
`;

const ActionBox = styled.div`
    width: min-content;
    display: flex;
    justify-content: flex-end;
`;

const Button = styled.span`
    display: flex;
    justify-content: center;
    background-color: transparent;
    border: 1px solid gray;
    border-radius: 4px;
    width: 30px;
    height: 22px;

    &:hover {
        cursor: pointer;
    }
`;

export default function Footer() {
    return (
        <ItemsContainer>
            <Item>
                <Content>
                    <ItemImage src="/img/icons/network.png" alt="Your network" />
                    <ItemText>Your network</ItemText>
                </Content>
                <ActionBox>
                    <Button>
                        <ItemImage src="/img/icons/network.svg" alt="Add to network" />
                    </Button>
                </ActionBox>
            </Item>
            <Item>
                <Content>
                    <ItemImage src="/img/icons/publications.svg" alt="Your Publications" />
                    <ItemText>Your Publications</ItemText>
                </Content>
                <ActionBox>
                    <Button>
                        <ItemImage src="/img/icons/plus.svg" alt="Add publication" />
                    </Button>
                </ActionBox>
            </Item>
        </ItemsContainer>
    );
}