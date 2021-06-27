import { IWorkspace } from "../../entities/Workspace";

export const setWorkspace = (workspace: IWorkspace[]|null = null) => {
    return {
        type: 'setWorkspace',
        workspace: workspace,
    };
}