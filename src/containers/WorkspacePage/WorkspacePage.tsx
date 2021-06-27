import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getWorkspace } from "../../api/Workspace";
import Works from "../../components/Works/Works";
import { IWorkspace } from "../../entities/Workspace";
import { GetLoggedUserId } from "../../helpers/User";
import ItemsSelector, { Items } from "../../shared/components/ItemsSelector";
import SearchInput from "../../shared/components/SearchInput";
import SeparateLine from "../../shared/components/SeparateLine";
import MainLayout from "../Layout/MainLayout";
import All from "./buttons/All";
import Communities from "./buttons/Communities";
import More from "./buttons/More";
import Poa from "./buttons/Poa";
import Sarl from "./buttons/Sarl";
import Sas from "./buttons/Sas";
import SecondaryBusiness from "./buttons/SecondaryBusiness";
import Survey from "./buttons/Survey";
import Header from "./elements/Header";
import Info from "./elements/Info";
import {
  ButtonContainer, CommentsContainerHeader, CommentsContainerHeaderTop, CommentsContainerHeaderTopLeft, CommentsContainerHeaderTopRight,
  CommentsContainerHeaderTitle,
} from "./styles/WorkspacePageStyles";

interface IRouteParams {
  id: string;
}

function WorkspacePage() {

  const loggedUserId = GetLoggedUserId();
  const params = useParams<IRouteParams>();
  const [inputText, setInputText] = useState("");
  const [workspace, setWorkspace] = useState<IWorkspace | null>(null);
  const [selectValue, setSelectValue] = useState(Items.All);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
  }

  const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let val = Object.values(Items).includes(e.target.value as Items) ? e.target.value as Items : Items.All;
    setSelectValue(val);
  }

  useEffect(() => {
    getWorkspace(Number(params.id))
      .then(data => setWorkspace(data))
  }, [params.id])

  return (
    <MainLayout>
      <>
        <Header workspace={workspace} />
        <Info />
        <CommentsContainerHeader>
          <CommentsContainerHeaderTop>
            <CommentsContainerHeaderTopLeft>
              <CommentsContainerHeaderTitle>Latest updates</CommentsContainerHeaderTitle>
            </CommentsContainerHeaderTopLeft>
            <CommentsContainerHeaderTopRight>
              <SearchInput inputChangeHandler={inputChangeHandler} placeholder="Filter by title..." />
              <SeparateLine />
              <ItemsSelector onChange={selectChangeHandler} />
            </CommentsContainerHeaderTopRight>
          </CommentsContainerHeaderTop>
          <ButtonContainer>
            <All />
            <Sas />
            <Sarl />
            <SecondaryBusiness />
            <Communities />
            <Poa />
            <Survey />
            <More />
          </ButtonContainer>
        </CommentsContainerHeader>
        <Works filterText={inputText} filterType={selectValue} loggedUserId={loggedUserId} />
      </>
    </MainLayout>
  )
}

export default WorkspacePage;
