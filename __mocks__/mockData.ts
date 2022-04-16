import { schema } from '../src/utils/schema';

export const mockData = {
    schema,
    values: {
        'case-management': true,
        'map-timeline': true,
        'views-&-briefings': false,
        notifications: false,
        'mass-communications': true,
        'traffic-cameras': true,
        'audit-log': false,
        users: {
            'users-add': false,
            'users-delete': false,
            'users-edit': false,
            'max-users': {
                value: false,
                count: '10',
            },
        },
        'alert-manager': {
            'alert-rules': {
                value: true,
                count: '3',
            },
        },
    },
    userValues: {
        users: {
            'users-add': false,
            'users-delete': false,
            'users-edit': false,
            'max-users': {
                value: false,
                count: '10',
            },
        },
    },
};
