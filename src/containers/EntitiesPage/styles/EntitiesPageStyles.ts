import styled from "styled-components";
import Color from "../../../shared/styleHelpers/Colors";
import { DefaultActionButton } from "../../../shared/styleHelpers/components/ActionButton";

export const EntitiesHeader = styled.div`
    display: flex;
    flex-direction: column;
`;

export const EntitiesHeaderTop = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const EntitiesHeaderTopLeft = styled.div`
    display: flex;
    flex-direction: row;
`;

export const EntitiesHeaderTopRight = styled.div`
    display: flex;
    flex-direction: row;
`;

export const EntitiesHeaderTitle = styled.span`
    padding: 0 2px;
    margin-right: 4px;
`;

export const EntitiesHeaderBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px 0;
    font-size: 0.9rem;
    color: ${Color.gray};
`;

export const BottomLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const BottomRight = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ViewTypeButton = styled(DefaultActionButton)`
    padding: 8px 10px;
    font-size: 0.86rem;
    font-weight: 900;
    color: ${Color.blue};
    border-radius: 2px;

    &.active {
        background-color: #EAECF5;
    }

    span {
        padding-left: 3px;
    }
`;

export const MosaicLayout = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) ;
  grid-gap: 10px;
  margin: 5px 0;
`;

export const RowLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`;

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 100%;
    position: relative;
`;

export const SearchInput = styled.input`
    border-radius: 3px;
    border: 1px solid #E8E8E8;
    font-size: 1.1em;
    padding: 6px 32px 6px 6px;
    width: 100%;

    &:focus {
      outline: none;
    }
`;

export const SearchIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 8px;
`;

export const ShareText = styled.span`
    padding: 0 2px;
`;