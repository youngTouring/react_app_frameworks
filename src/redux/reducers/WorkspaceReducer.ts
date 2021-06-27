import { IWorkspace } from "../../entities/Workspace";

interface IWorkspaceReducerAction {
  type: string;
  workspace: IWorkspace[]|null;
}

const setWorkspace = (state = null, action: IWorkspaceReducerAction) => {
  switch (action.type) {
    case 'setWorkspace': return action.workspace;
    default: return state;
  }
}

export default setWorkspace;