import styled from "styled-components";
import WorkspaceItem from "./elements/WorkspaceItem";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useSelector } from "react-redux";
import { IGlobalState } from "../../redux/reducers";
import { IWorkspace } from "../../entities/Workspace";
import { Link } from "react-router-dom";

const WorkspaceLink = styled(Link)`
    text-decoration: none;
`;

const ItemsContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const CustomCarousel = styled(Carousel)`
.BrainhubCarousel__track {
        padding: 10px 0 !important;
    }
`;

function Workspaces() {

    let items = useSelector((state: IGlobalState) => state.workspaces);
    if (items == null) {
        items = [];
    }

    const itemsCount = items.length;

    if (itemsCount === 0) {
        return null;
    }

    return (
        <ItemsContainer>
            <CustomCarousel itemWidth={250} plugins={[{
                resolve: slidesToShowPlugin,
                options: {
                    numberOfSlides: itemsCount
                }
            }]}>
                {
                    items.map((item: IWorkspace, index) => (
                        <WorkspaceLink key={index} to={`/workspace/${item.id}`}>
                            <WorkspaceItem workspace={item} />
                        </WorkspaceLink>
                    ))
                }
            </CustomCarousel>
        </ItemsContainer>
    );
}

export default Workspaces;