// Form Input Data
export const inputData = [
    {
        id: 1,
        type: 'text',
        name: 'firstname',
        placeholder: 'First Name',
        required: true,
        errMsg: 'First Name cannot be empty',
        pattern: '^[A-Za-z0-9]{1,}$'
    },
    {
        id: 2,
        type: 'text',
        name: 'lastname',
        placeholder: 'Last Name',
        required: true,
        errMsg: 'Last Name cannot be empty',
        pattern: '^[A-Za-z0-9]{1,}$'
    },
    {
        id: 3,
        type: 'email',
        name: 'email',
        placeholder: 'Email Address',
        required: true,
        errMsg: 'Looks like this is not an email',
        pattern: '^(?:(?!.*?[.]{2})[a-zA-Z0-9](?:[a-zA-Z0-9.+!%-]{1,64}|)|"[a-zA-Z0-9.+!% -]{1,64}")@[a-zA-Z0-9][a-zA-Z0-9.-]+(.[a-z]{2,}|.[0-9]{1,})$'
    },
    {
        id: 4,
        type: 'password',
        name: 'password',
        placeholder: 'Password',
        required: true,
        errMsg: 'Password should be 8-20 characters',
        pattern: "^[A-Za-z0-9!@#$%^&*]{8,20}$"
    },
]