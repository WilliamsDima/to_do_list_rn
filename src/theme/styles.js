const theme = {
    'dark': {
        header: {
            bg: '#323232'
        },
        content: {
            bg: '#1E1E1E'
        },
        text: {
            color: '#fff'
        },
        input: {
            bg: '#000'
        },
    },
    'light': {
        header: {
            bg: '#ccc'
        },
        content: {
            bg: '#FAFAFA'
        },
        text: {
            color: '#000'
        },
        input: {
            bg: '#fff'
        },
    }
};

export const getThemeApp = (nameTheme = 'light') => theme[nameTheme];
