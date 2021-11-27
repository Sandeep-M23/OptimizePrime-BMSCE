import { IconType } from 'react-icons/lib';

interface IBlog {
    url: string;
    title: string;
    description: string;
    id: number;
    link: string;
}

interface ISocialMedia {
    icon: IconType;
    url: string;
    text: string;
}

interface IBasicCard {
    title: string;
    description: string;
    icon: IconType;
}
