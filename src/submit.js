const submit = values => {
    const url = '/';
    const formData = new FormData();

    const { firstname, lastname, github, telegram, files } = values;

    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('github', github);
    formData.append('telegram', telegram);
    formData.append('screenshot', files[0]);
    return fetch(url, { method: 'POST', body: formData });
};

export default submit;
