import styled from "styled-components";
import Platform from "./platform/Platform";
import Account from "./account/Account";
import Workspaces from "./workspaces/Workspaces";
import Logout from "./Logout";
import SpaceLine from "../../shared/components/SpaceLine";
import { IsUserLoggedIn } from "../../helpers/User";
import { useState } from "react";
import SearchInput from "../../shared/components/SearchInput";

const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    padding: 0 12px;
`;

const DropdownWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50px;
    left: 50px;
    width: 250px;
    border: 1px solid #E8E8E8;
    background-color: white;
    padding: 5px 0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
`;

const Title = styled.span`
    color: #959595;
    font-weight: 900;
    font-size: 0.9em;
    line-height: 0.84;
    padding-left: 12px;
    margin: 6px 0;
`;

function Dropdown() {
    const isLoggedIn = IsUserLoggedIn();
    const [inputText, setInputText] = useState("");
    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    return (
        <DropdownWrapper>
            <SearchWrapper>
                <SearchInput inputChangeHandler={inputChangeHandler} placeholder="Filter..."/>
            </SearchWrapper>

            <Title>Platform</Title>
            <Platform filterText={inputText} />

            <Title>Workspaces</Title>
            <Workspaces filterText={inputText} />

            {
                isLoggedIn ?
                    <>
                        <SpaceLine />

                        <Title>Account</Title>
                        <Account filterText={inputText} />

                        <SpaceLine />
                        <Logout />
                    </> : null
            }

        </DropdownWrapper>
    )
}

export default Dropdown;