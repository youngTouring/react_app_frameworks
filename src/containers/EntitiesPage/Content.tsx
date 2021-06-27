import { IPhoto } from "../../entities/Photo";
import EntityMosaic from "../../components/Entity/types/EntityMosaic";
import EntityRow from "../../components/Entity/types/EntityRow";
import { EntityViewType } from "./entities/EntityViewType";
import { MosaicLayout, RowLayout } from "./styles/EntitiesPageStyles";
import { GetLoggedUserId } from "../../helpers/User";
import { filterByLoggedUser } from "../../helpers/Filter";
import { Items } from "../../shared/components/ItemsSelector";

interface IProps {
    entities: IPhoto[];
    view: EntityViewType;
    fitlerType: Items;
}

function Content(props: IProps) {
    let loggedUserId = GetLoggedUserId();
    let items = props.entities;
    items = filterByLoggedUser(items, "albumId", props.fitlerType, loggedUserId);

    let itemsToShow: JSX.Element[] = [];

    switch (props.view) {
        case EntityViewType.Row:
            items.forEach((element, index) => {
                itemsToShow.push(<EntityRow key={index} entity={element} />);
            });

            return (
                <RowLayout>
                    {itemsToShow}
                </RowLayout>
            );
        default:
            items.forEach((element, index) => {
                itemsToShow.push(<EntityMosaic key={index} entity={element} />);
            });

            return (
                <MosaicLayout>
                    {itemsToShow}
                </MosaicLayout>
            );
    }
}

export default Content;
