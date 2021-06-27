import React from "react";
import styled from "styled-components";
import Work from "./elements/Work";
import ReactPaginate from 'react-paginate';
import Color from "../../shared/styleHelpers/Colors";
import { filter, filterByLoggedUser } from "../../helpers/Filter";
import { IComment } from "../../entities/Comment";
import { getComments } from "../../api/Comments";
import { getUsers } from "../../api/User";
import { IUser } from "../../entities/User";
import { IPhoto } from "../../entities/Photo";
import { getPhotos } from "../../api/Photo";
import { Items } from "../../shared/components/ItemsSelector";

const Container = styled.div`
    .pagination {
        display: flex;
        justify-content: center;
        margin: 5px 0 25px 0;
        padding: 4px 0;
        user-select: none;
    }

    .pagination ul {
        display: inline-block;
        padding-left: 15px;
        padding-right: 15px;
    }

    .pagination li {
        display: inline-block;
        margin: 0 2px;
        text-align: center;
        color: ${Color.paginationBlue};
        font-weight: 900;

        a {
            padding: 5px;
        }

        &:hover {
            cursor: pointer;
        }
    }

    .pagination li.active {
        font-weight: 900;
        color: black;
    }
`;
const ItemContainer = styled.div``;
const WorksPagination = styled(ReactPaginate)``;

interface IProps {
    filterText: string;
    filterType?: Items;
    loggedUserId?: number | null;
}

interface IState {
    comments: IComment[] | [];
    photos: IPhoto[] | [];
    users: IUser[] | [];
    perPage: number;
    offset: number;
}

export default class Works extends React.Component<IProps, IState>
{
    constructor(props: IProps) {
        super(props);

        this.state = {
            comments: [],
            photos: [],
            users: [],
            perPage: 10,
            offset: 0,
        };
    }

    async componentDidMount() {
        const [comments, photos, users] = await Promise.all([
            getComments().then(response => response.json()).then(data => data),
            getPhotos().then(response => response.json()).then(data => data),
            getUsers().then(response => response.json()).then(data => data),
        ]);

        this.setState({
            comments: comments,
            photos: photos,
            users: users,
        });
    }

    render() {
        const items: JSX.Element[] = [];
        let filteredItems = filter(this.state.comments, 'name', this.props.filterText);
        filteredItems = filterByLoggedUser(filteredItems, 'postId', this.props.filterType, this.props.loggedUserId);

        const itemsPerPage = this.state.perPage;
        const offset = this.state.offset;
        const total = filteredItems.length;
        const pageCount = Math.ceil(total / itemsPerPage);

        let handlePageClick = (data: { selected: number }) => {
            let selected = data.selected;
            let offsetToSet = Math.ceil(selected * itemsPerPage);
            this.setState({ offset: offsetToSet });
        };

        const itemsToTake = filteredItems.slice(offset, itemsPerPage + offset);
        itemsToTake.forEach((comment: IComment) => {
            items.push(<Work key={comment.id} comment={comment} photo={this.getUserPhoto(comment.postId)} user={this.getUser(comment.postId)} />);
        });

        return (
            <Container>
                <ItemContainer>
                    {items}
                </ItemContainer>
                <WorksPagination
                    previousLabel={'PREVIOUS'}
                    nextLabel={'NEXT'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </Container>
        );
    }

    getUser(userId: number) {
        const users = this.state.users;

        for (let i = 0; i < users.length; i++) {
            if (users[i].id === userId) {
                return users[i];
            }
        }

        return null;
    }

    getUserPhoto(userId: number) {
        const photos = this.state.photos;

        for (let i = 0; i < photos.length; i++) {
            if (photos[i].id === userId) {
                return photos[i];
            }
        }

        return null;
    }
}