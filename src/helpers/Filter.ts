import { Items } from "../shared/components/ItemsSelector";

export const filter = (items: Array<any>, keyToSearch: string, filterText: string) => {
    return items.filter(item => (item[keyToSearch].toLowerCase()).indexOf(filterText.toLowerCase()) !== -1);
}

export const filterByLoggedUser = (items: Array<any>, keyToSearch: string, type?: Items, userId?: number | undefined | null) => {

    if (userId === null || userId === undefined) {
        return items;
    } else if (type === Items.All) {
        return items;
    }

    return items.filter(item => {
        switch (type) {
            case Items.My: return item[keyToSearch] === userId;
            default: return true;
        }
    });
}