import { IWorkspace } from "../entities/Workspace";

export const getWorkspaces = (): Promise<IWorkspace[]> => {
    return new Promise((resolve, reject) => {
        resolve(staticData)
    });
}

export const getWorkspace = (id: number): Promise<IWorkspace|null> => {
    return new Promise((resolve, reject) => {
        const data = staticData;
        
        for(let i = 0; i < data.length; i++) {
            if(data[i].id === id) {
                resolve(data[i]);
            }
        }

        resolve(null);
    });
}

const staticData = [
    {
        id: 1,
        title: "Client contract",
        description: "Workspace purpose and a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory.",
        userCount: 150,
        type: "Contract",
        backgroundImageUrl: "",
        image: "/img/icons/entities2.svg",
        lastUpdate: "2 days ago"
    },
    {
        id: 2,
        title: "Supplier contract",
        description: "Workspace purpose and a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory.",
        userCount: 25,
        type: "Contract",
        backgroundImageUrl: "",
        image: "/img/icons/entities2.svg",
        lastUpdate: "2 days ago"
    },
    {
        id: 3,
        title: "Corporate",
        description: "Workspace purpose and a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory.",
        userCount: 25,
        type: "Corporate",
        backgroundImageUrl: "",
        image: "/img/icons/entities2.svg",
        lastUpdate: "2 days ago"
    },
    {
        id: 4,
        title: "Group Norms",
        description: "Workspace purpose and a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory.",
        userCount: 25,
        type: "Norms",
        backgroundImageUrl: "",
        image: "/img/icons/entities2.svg",
        lastUpdate: "2 days ago"
    },
    {
        id: 5,
        title: "Real estate contracts",
        description: "Workspace purpose and a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory.",
        userCount: 150,
        type: "Contract",
        backgroundImageUrl: "",
        image: "/img/icons/entities2.svg",
        lastUpdate: "2 days ago"
    }
];