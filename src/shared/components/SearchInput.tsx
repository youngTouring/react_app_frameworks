import styled from "styled-components";

const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
`;

const SearchInputElement = styled.input`
    border-radius: 3px;
    border: 1px solid #E8E8E8;
    font-size: 1.1em;
    padding: 6px 32px 6px 6px;
    width: 100%;
    z-index: 2;

    &:focus {
        outline: none;
    }
`;

const SearchIconWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 6px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const SearchIcon = styled.img`
    right: 10px;
    top: 8px;
    z-index: 3;
`;

interface IProps {
    inputChangeHandler: React.ChangeEventHandler<HTMLInputElement> | undefined;
    placeholder?: string;
}

const SearchInput = (props: IProps) => {
    return (
        <SearchWrapper>
            <SearchInputElement className="search-input" onChange={props.inputChangeHandler} type="text" placeholder={props?.placeholder} />
            <SearchIconWrapper>
                <SearchIcon src="/img/icons/search.png" />
            </SearchIconWrapper>
        </SearchWrapper>
    );
}

export default SearchInput;