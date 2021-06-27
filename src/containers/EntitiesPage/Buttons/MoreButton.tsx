import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { DefaultActionButton } from "../../../shared/styleHelpers/components/ActionButton";

const MoreButtonWrapper = styled(DefaultActionButton)`
    margin-left: 8px;
`;

const MoreButton = () => {
    return (
        <MoreButtonWrapper>
            <FontAwesomeIcon icon={faEllipsisH} />
        </MoreButtonWrapper>
    )
}

export default MoreButton;