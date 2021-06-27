import { faBars, faCog, faThLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { filter } from "../../helpers/Filter";
import { Sort } from "../../helpers/Sortable";
import SeparateLine from "../../shared/components/SeparateLine";
import { SortButton } from "../../shared/components/Sort";
import { DefaultActionButton } from "../../shared/styleHelpers/components/ActionButton";
import DynamicLayout from "../Layout/DynamicLayout";
import { EntityViewType } from "./entities/EntityViewType";
import FullScreenButton from "./Buttons/FullScreenButton";
import {
  EntitiesHeader, EntitiesHeaderBottom, EntitiesHeaderTop, EntitiesHeaderTitle, ViewTypeButton,
  SearchWrapper, SearchInput, SearchIcon, BottomLeft, BottomRight, EntitiesHeaderTopLeft, EntitiesHeaderTopRight,
} from "./styles/EntitiesPageStyles";
import FiltersButton from "./Buttons/FiltersButton";
import ShareButton from "./Buttons/ShareButton";
import MoreButton from "./Buttons/MoreButton";
import AllButton from "./Buttons/AllButton";
import { getPhotos } from "../../api/Photo";
import { IPhoto } from "../../entities/Photo";
import ItemsSelector, { Items } from "../../shared/components/ItemsSelector";
import Content from "./Content";

interface IProps { }
interface IState {
  view: EntityViewType;
  entities: IPhoto[] | [];
  sort: Sort;
  searchText: string;
  fitlerType: Items;
}

class EntitiesPage extends React.Component<IProps, IState>
{
  constructor(props: IProps) {
    super(props);

    this.state = {
      view: EntityViewType.Mosaic,
      entities: [],
      sort: Sort.NONE,
      searchText: "",
      fitlerType: Items.All,
    };

    this.searchInputChangeHandler = this.searchInputChangeHandler.bind(this);
    this.selectChangeHandler = this.selectChangeHandler.bind(this);
    this.sortButtonClick = this.sortButtonClick.bind(this);
  }

  componentDidMount() {
    getPhotos()
      .then(response => response.json())
      .then(data => {
        data = data.slice(0, 120);
        this.setState({ entities: data });
      })
  }

  searchInputChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchText: event.target.value });
  }

  selectChangeHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    let val = Object.values(Items).includes(event.target.value as Items) ? event.target.value as Items : Items.All;
    this.setState({ fitlerType: val });
  }

  sortButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    if (this.state.sort === Sort.NONE) {
      this.setState({ sort: Sort.A_TO_Z });
    } else {
      this.setState({ sort: (this.state.sort === Sort.A_TO_Z ? Sort.Z_TO_A : Sort.A_TO_Z) });
    }
  }

  render() {
    return (
      <DynamicLayout>
        <>
          <EntitiesHeader>
            <EntitiesHeaderTop>
              <EntitiesHeaderTopLeft>
                <EntitiesHeaderTitle>Entities</EntitiesHeaderTitle>
                <DefaultActionButton><FontAwesomeIcon icon={faCog} /></DefaultActionButton>
              </EntitiesHeaderTopLeft>
              <EntitiesHeaderTopRight>
                <ViewTypeButton className={this.currentViewTypeButtonClassHelper(EntityViewType.Mosaic)} onClick={() => this.changeLayout(EntityViewType.Mosaic)}>
                  <FontAwesomeIcon icon={faThLarge} />
                  {this.state.view === EntityViewType.Mosaic ? <span>Mosaic</span> : null}
                </ViewTypeButton>
                <ViewTypeButton className={this.currentViewTypeButtonClassHelper(EntityViewType.Row)} onClick={() => this.changeLayout(EntityViewType.Row)}>
                  <FontAwesomeIcon icon={faBars} />
                  {this.state.view === EntityViewType.Row ? <span>List</span> : null}
                </ViewTypeButton>
              </EntitiesHeaderTopRight>
            </EntitiesHeaderTop>
            <EntitiesHeaderBottom>
              <BottomLeft>
                <AllButton />
                <MoreButton />
                <SeparateLine />
                <SortButton onClickHandler={this.sortButtonClick} currentSort={this.state.sort} />
                <FiltersButton />
                <SeparateLine />
                <FullScreenButton />
                <SeparateLine />
                <ShareButton />
              </BottomLeft>
              <BottomRight>
                <SearchWrapper>
                  <SearchInput onChange={this.searchInputChangeHandler} value={this.state.searchText} type="text" placeholder="Search..." />
                  <SearchIcon src="img/icons/search.png" />
                </SearchWrapper>
                <SeparateLine />
                <ItemsSelector onChange={this.selectChangeHandler} />
              </BottomRight>
            </EntitiesHeaderBottom>
          </EntitiesHeader>
          <Content entities={this.getFilteredItems()} view={this.state.view} fitlerType={this.state.fitlerType}/>
        </>
      </DynamicLayout>
    );
  }

  currentViewTypeButtonClassHelper(layout: EntityViewType) {
    const currentViewType = this.state.view;
    return currentViewType === layout ? "active" : "";
  }

  getFilteredItems() {
    let items = this.state.entities;
    let searchText = this.state.searchText;

    items = filter(items, 'title', searchText);

    this.sortItems(items);

    return items;
  }

  sortItems(items: IPhoto[]) {
    if (this.state.sort !== Sort.NONE) {
      items.sort((a, b) => {
        let titleA = a.title.toLowerCase(),
          titleB = b.title.toLowerCase();

        if (titleA < titleB) { return this.state.sort === Sort.A_TO_Z ? -1 : 1; }
        if (titleA > titleB) { return this.state.sort === Sort.A_TO_Z ? 1 : -1; }
        return 0;
      })
    }
  }

  changeLayout(layout: EntityViewType) {
    this.setState({ view: layout });
  }
}

export default EntitiesPage;
