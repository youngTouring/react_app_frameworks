import styled from "styled-components";
import Works from "../../components/Works/Works";
import LatestPublications from "../../components/Publications/LatestPublications";
import Workspaces from "../../components/Workspaces/Workspaces";
import Color from "../../shared/styleHelpers/Colors";
import React, { useState } from "react";
import SearchInput from "../../shared/components/SearchInput";
import ItemsSelector, { Items } from "../../shared/components/ItemsSelector";
import SeparateLine from "../../shared/components/SeparateLine";
import { GetLoggedUserId } from "../../helpers/User";

const LabelText = styled.span`
  font-size: 1.25rem;
  font-family: "AppFontBold";
  color: ${Color.Fiord};
`;

const LabelHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 15px;
`;

const ResumeWorkHeaderContainer = styled(LabelHeaderContainer)`
  display: flex;
  justify-content: space-between;
`;

const ResumeWorkOptions = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const SearchWrapper = styled.div`
  width: 200px;
  height: 100%;
`;

function Content() {
  const [inputText, setInputText] = useState("");
  const [selectValue, setSelectValue] = useState(Items.All);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
  }

  const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let val = Object.values(Items).includes(e.target.value as Items) ? e.target.value as Items : Items.All;
    setSelectValue(val);
  }

  const loggedUserId = GetLoggedUserId();

  return (
    <>
      <LatestPublications />
      <LabelHeaderContainer>
        <LabelText>Workspaces</LabelText>
      </LabelHeaderContainer>
      <Workspaces />
      <ResumeWorkHeaderContainer>
        <LabelText>Resume your work</LabelText>
        <ResumeWorkOptions>
          <SearchWrapper>
            <SearchInput inputChangeHandler={inputChangeHandler} placeholder="Filter by title..." />
          </SearchWrapper>
          <SeparateLine />
          <ItemsSelector onChange={selectChangeHandler} />
        </ResumeWorkOptions>
      </ResumeWorkHeaderContainer>
      <Works filterText={inputText} filterType={selectValue} loggedUserId={loggedUserId} />
    </>
  );
}

export default Content;
