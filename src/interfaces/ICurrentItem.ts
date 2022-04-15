export interface ICurrentItem {
    id: string;
    label: string;
    type?: 'group' | undefined;
    count?: number;
    value?: boolean;
    items?: ICurrentItem[];
}
