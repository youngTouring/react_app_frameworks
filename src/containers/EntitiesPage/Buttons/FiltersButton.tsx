import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useDropdown from "react-dropdown-hook";
import styled from "styled-components";
import { DefaultActionButton } from "../../../shared/styleHelpers/components/ActionButton";
import Filters from "../elements/Filters";

const BoxWrapper = styled.div`
    position: relative;
`;

const FiltersButtonWrapper = styled(DefaultActionButton)`
    margin-left: 6px;
`;

const FiltersButton = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    return (
        <BoxWrapper ref={wrapperRef}>
            <FiltersButtonWrapper onClick={toggleDropdown}>
                <FontAwesomeIcon icon={faFilter} />
                <span>Fitlers</span>
            </FiltersButtonWrapper>
            {dropdownOpen &&
                <>
                    <Filters />
                </>}
        </BoxWrapper>

    )
}

export default FiltersButton;