import styled from "styled-components";
import SearchInput from "../../shared/components/SearchInput";
import FastNav from "./elements/FastNav";
import Home from "./elements/Home";
import Logo from "./elements/Logo";

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 50px;
    width: 100%;
    z-index: 100;
    box-shadow: 2px 5px 10px #ECECEC;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
`;

const SidebarHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    min-width: 300px;
`;

const SearchContainer = styled.div`
    display: flex;
    width: 100%;
    padding-left: 50px;
    user-select: none;
    display: flex;
    justify-content: center;
`;

const SearchWrapper = styled.div`
    width: 70%;
`;

const FastNavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 300px;
    min-width: 300px;
`;

function Header() {
    return (
        <HeaderWrapper>
            <SidebarHeaderContainer>
                <Logo />
                <Home />
            </SidebarHeaderContainer>
            <SearchContainer>
                <SearchWrapper>
                    <SearchInput inputChangeHandler={undefined} placeholder="Search legalcluster"/>
                </SearchWrapper>
            </SearchContainer>
            <FastNavContainer>
                <FastNav />
            </FastNavContainer>
        </HeaderWrapper>
    );
}

export default Header;
