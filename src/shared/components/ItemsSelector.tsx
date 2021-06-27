import styled from "styled-components";
import Color from "../styleHelpers/Colors";

const FollowedFilterColor = styled.object`
  filter: invert(39%) sepia(30%) saturate(1297%) hue-rotate(177deg) brightness(94%) contrast(88%);
`;

const SelectContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    height: 100%;
`;

const FollowedImg = styled(FollowedFilterColor)`
    position: absolute;
    left: 5px;
`;

const Select = styled.select`
    height: 100%;
    padding-left: 30px;
    color: ${Color.blue};
    border: 1px solid ${Color.blue};
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 900;
    outline: none;
`;

interface IProps {
    onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined;
}

export enum Items {
    All = "all",
    My = "my",
}

const ItemsSelector = (props: IProps) => {
    return (
        <SelectContainer>
            <FollowedImg type="image/svg+xml" data="/img/icons/follow.svg" />
            <Select onChange={props.onChange} defaultValue={0}>
                <option value={0} hidden disabled>Followed</option>
                <option value={Items.All}>All</option>
                <option value={Items.My}>My</option>
            </Select>
        </SelectContainer>
    );
}

export default ItemsSelector;