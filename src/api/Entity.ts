import { IEntity } from "../entities/Entity";

export const getEntities = (): Promise<IEntity[]> => {
    return new Promise((resolve, reject) => {
        resolve(staticData)
    });
}

const staticData = [
    {
        title: "World company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem1.jpg",
        userId: 1,
    },
    {
        title: "Australia company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem2.jpg",
        userId: 2,
    },
    {
        title: "Mali company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem3.jpg",
        userId: 2,
    },
    {
        title: "Oman company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem4.jpg",
        userId: 3,
    },
    {
        title: "New Zealand company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem5.jpg",
        userId: 4,
    },
    {
        title: "Peru company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem6.jpg",
        userId: 5,
    },
    //
    {
        title: "Portugal company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem1.jpg",
        userId: 1,
    },
    {
        title: "Armenia company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem2.jpg",
        userId: 2,
    },
    {
        title: "Malta company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem3.jpg",
        userId: 2,
    },
    {
        title: "Russia company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem4.jpg",
        userId: 3,
    },
    {
        title: "Estonia company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem5.jpg",
        userId: 4,
    },
    {
        title: "Dominica company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem6.jpg",
        userId: 5,
    },
    //
    {
        title: "Bahamas company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem1.jpg",
        userId: 1,
    },
    {
        title: "Argentina company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem2.jpg",
        userId: 2,
    },
    {
        title: "Mozambique company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem3.jpg",
        userId: 2,
    },
    {
        title: "Panama company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem4.jpg",
        userId: 3,
    },
    {
        title: "Niger company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem5.jpg",
        userId: 4,
    },
    {
        title: "Ukraine company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem6.jpg",
        userId: 5,
    },
    //
    {
        title: "Austria company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem1.jpg",
        userId: 1,
    },
    {
        title: "Iceland company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem2.jpg",
        userId: 2,
    },
    {
        title: "Mongolia company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem3.jpg",
        userId: 2,
    },
    {
        title: "Rwanda company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem4.jpg",
        userId: 3,
    },
    {
        title: "Spain company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem5.jpg",
        userId: 4,
    },
    {
        title: "Botswana company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem6.jpg",
        userId: 5,
    },
    //
    {
        title: "France company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem1.jpg",
        userId: 1,
    },
    {
        title: "South Africa company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem2.jpg",
        userId: 2,
    },
    {
        title: "Slovakia company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem3.jpg",
        userId: 2,
    },
    {
        title: "United Kingdom company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem4.jpg",
        userId: 3,
    },
    {
        title: "Vanuatu company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem5.jpg",
        userId: 4,
    },
    {
        title: "Zimbabwe company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem6.jpg",
        userId: 5,
    },
];