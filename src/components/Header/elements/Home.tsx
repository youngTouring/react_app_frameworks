import styled from "styled-components";
import { FC } from 'react';
import useDropdown from 'react-dropdown-hook';
import Dropdown from "../../Dropdown/Dropdown";

const HomeWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 240px;
    padding: 0 12px;
`;

const InteractivePanel = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    user-select: none;
    
    &:hover {
        cursor: pointer;
    }
`;

const HomeImage = styled.img``;

const ArrowImagePanel = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;
const ArrowImage = styled.img``;

const HomeText = styled.span`
    display: block;
    height: max-content;
    font-size: 1.14em;
    padding: 0 0 0 12px;
    font-weight: 900;
`;

const Home: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    return (
        <HomeWrapper ref={wrapperRef}>
            <HomeImage src="/img/icons/house2.png" />
            <InteractivePanel onClick={toggleDropdown}>
                <HomeText>Home</HomeText>
                <ArrowImagePanel>
                    <ArrowImage src="/img/icons/arrow-down.png" />
                </ArrowImagePanel>
            </InteractivePanel>

            {dropdownOpen &&
                <>
                    <Dropdown />
                </>}

        </HomeWrapper>
    );
}

export default Home;
