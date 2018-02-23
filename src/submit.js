const submit = values => {
    const url = '/';
    const formData = new FormData();

    const { firstname, lastname, github, telegram, faculty, files } = values;

    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('github', github);
    formData.append('telegram', telegram);
    formData.append('faculty', faculty);
    formData.append('screenshot', files[0]);
    return fetch(url, { method: 'POST', body: formData }).then(
        response => response.status === 200
    );
};

export default submit;
