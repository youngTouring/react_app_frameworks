import styled from "styled-components";
import Color from "../../../../shared/styleHelpers/Colors";

export const Label = styled.span`
    color: ${Color.gray};
    padding: 2px 0;
    margin-bottom: 3px;
`;

export const InfoText = styled.span`
    color: ${Color.blue};
    font-weight: 900;
    padding: 2px 0;
`;

export const CustomBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4px 0;
    margin-bottom: 4px;
`;

export const TagsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 5px 0;
    margin-bottom: 4px;
`;

export const Tag = styled.div`
    color: ${Color.blue};
    background-color: rgb(230, 240, 243);
    padding: 4px 12px;
    border-radius: 4px;
    font-weight: 900;
    margin-right: 4px;
`;

export const TagInputBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 2px 2px 0;
`;

export const TagInput = styled.input`
    color: ${Color.blue};
    border: none;
    outline: none;
    background-color: rgb(230, 240, 243);
    padding: 4px 12px;
    border-radius: 4px;
    font-weight: 900;
    margin-right: 2px;
`;

export const FileNameText = styled.span`
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 12px;
    color: ${Color.blue};
    background-color: rgb(230, 240, 243);
    z-index: 1;
    font-weight: 900;
`;

export const InputImageWrapper = styled.img`
    max-width: 32px;
    max-height: 32px;
`;

export const InputDataWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 32px;
`;