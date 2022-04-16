export interface ICurrentItem {
    id: string;
    label: string;
    type?: string;
    count?: string;
    value: boolean;
    items?: ICurrentItem[];
}
