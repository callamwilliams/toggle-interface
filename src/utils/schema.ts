export const schema = {
    general: [
        { id: 'case-management', label: 'Case Management', value: true },
        { id: 'map-timeline', label: 'Map Timeline', value: true },
        { id: 'views-&-briefings', label: 'Views & Briefings', value: false },
        { id: 'notifications', label: 'Notifications', value: false },
        { id: 'mass-communications', label: 'Mass Communications', value: true },
        { id: 'traffic-cameras', label: 'Traffic Cameras', value: true },
    ],
    settings: [
        { id: 'audit-log', label: 'Audit Log', value: false },
        {
            id: 'users',
            label: 'Users',
            type: 'group',
            value: true,
            items: [
                { id: 'users-add', label: 'Users Add', value: true },
                { id: 'users-delete', label: 'User Delete', value: true },
                { id: 'users-edit', label: 'Users Edit', value: false },
                {
                    id: 'max-users',
                    label: 'Max Users',
                    count: '10',
                    value: false,
                },
            ],
        },
    ],
    alerts: [
        {
            id: 'alert-manager',
            label: 'Alert Manager',
            type: 'group',
            value: true,
            items: [
                {
                    id: 'alert-rules',
                    label: 'Alert Rules',
                    count: '3',
                    value: true,
                },
            ],
        },
    ],
};
