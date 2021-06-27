import { faSort, faSortAlphaDown, faSortAlphaDownAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Sort } from "../../helpers/Sortable";
import Color from "../styleHelpers/Colors";
import { DefaultActionButton } from "../styleHelpers/components/ActionButton";

const Text = styled.span`
    padding: 0 3px;
    font-size: 0.9rem;
    color: ${Color.gray};
`;

interface IProps {
    onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
    currentSort: Sort;
}

export const SortButton = (props: IProps) => {
    return (
        <DefaultActionButton onClick={props.onClickHandler}>
            {getSortIcon(props.currentSort)}
            <Text>Sort</Text>
        </DefaultActionButton>
    );
}

const getSortIcon = (currentSort: Sort) => {
    switch (currentSort) {
        case Sort.A_TO_Z: return <FontAwesomeIcon icon={faSortAlphaDown} />
        case Sort.Z_TO_A: return <FontAwesomeIcon icon={faSortAlphaDownAlt} />
        default: return <FontAwesomeIcon icon={faSort} />
    }
}