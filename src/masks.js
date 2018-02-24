export const vk = value => {
    const prefix = [...'https://vk.com/'];
    const valueChars = [...value];

    return [...prefix, ...valueChars.map(() => /[a-zA-Z0-9_]/)];
};

export const telegram = value => {
    const prefix = [...'https://t.me/'];
    const valueChars = [...value];

    return [...prefix, ...valueChars.map(() => /[a-zA-Z0-9_-]/)];
};

export const github = value => {
    const prefix = [...'https://github.com/'];
    const valueChars = [...value];

    return [...prefix, ...valueChars.map(() => /[a-zA-Z0-9_-]/)];
};
