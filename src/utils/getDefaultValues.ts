export const getDefaultValues = (item) =>
    item.reduce((acc, curr) => {
        if (curr.type === 'group') {
            return {
                ...acc,
                [curr.id]: getDefaultValues(curr.items),
            };
        }

        if (curr.count) {
            return {
                ...acc,
                [curr.id]: { value: curr.value, count: curr.count },
            };
        }

        return {
            ...acc,
            [curr.id]: curr.value || false,
        };
    }, {});
