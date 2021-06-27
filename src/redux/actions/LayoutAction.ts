import { Layout } from "../../helpers/Layout";

export const setLayout = (layout: Layout = Layout.DEFAULT) => {
    return {
        type: 'setLayout',
        layout: layout,
    };
}