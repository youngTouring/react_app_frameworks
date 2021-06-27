import { faDotCircle, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Color from "../../../shared/styleHelpers/Colors";
import { DefaultActionButton } from "../../../shared/styleHelpers/components/ActionButton";

const AllButtonWrapper = styled(DefaultActionButton)`
    margin-right: 6px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 7px;
    border-radius: 4px;
    background-color: #EAECF5;
    box-shadow: 2px 2px 5px #d5d6da;
    font-weight: 900;
    font-size: 0.85rem;
    color: ${Color.blue};
`;

const DotCircleIcon = styled(FontAwesomeIcon)`
    display: flex;
    align-items: center;
`;

const ArrowDownIcon = styled(FontAwesomeIcon)`
    display: flex;
    align-items: center;
    
    & {
        margin-bottom: 3px;
    }
`;

const Text = styled.span`
    display: flex;
    align-items: center;
    margin: 0 8px;
`;

const AllButton = () => {
    return (
        <AllButtonWrapper>
            <DotCircleIcon icon={faDotCircle} />
            <Text>All</Text>
            <ArrowDownIcon icon={faSortDown} />
        </AllButtonWrapper>
    )
}

export default AllButton;