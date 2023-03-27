// Form Input Data
export const inputData = [
    {
        id: 1,
        type: 'text',
        name: 'fullname',
        placeholder: 'Full Name',
        required: true,
        errMsg: 'Full Name cannot be empty',
        pattern: '^[A-Za-z0-9 ]{1,}$',
        length: 2,
        lengthErrMsg: 'Full name should be more than 2 characters'
    },
    {
        id: 2,
        type: 'text',
        name: 'username',
        placeholder: 'Username Name',
        required: true,
        errMsg: 'Username cannot be empty',
        pattern: '^[A-Za-z0-9 ]{1,}$',
        length: 2,
        lengthErrMsg: 'Username should be more than 2 characters'
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
        type: 'tel',
        name: 'phone',
        placeholder: 'Phone (+233234567890)',
        required: true,
        errMsg: 'Phone number cannot be empty',
        pattern: '^[A-Za-z0-9]{1,}$'
    },
    {
        id: 5,
        type: 'text',
        name: 'address',
        placeholder: 'Address',
        required: true,
        errMsg: 'Address cannot be empty',
        pattern: '^[A-Za-z0-9 ]{1,}$'
    },
    {
        id: 6,
        type: 'date',
        name: 'dob',
        placeholder: 'Date of birth',
        required: true,
        errMsg: 'DOB cannot be empty',
        pattern: '^[A-Za-z0-9]{1,}$'
    },
    {
        id: 7,
        type: 'password',
        name: 'password',
        placeholder: 'Enter Password',
        required: true,
        errMsg: 'Password error',
        // pattern: '^[A-Za-z0-9]{1,}$'
    },
    {
        id: 8,
        type: 'password',
        name: 'password-password',
        placeholder: 'Repeat Password',
        required: true,
        errMsg: 'Passwords do not match',
        validate: true
        // pattern: '^[A-Za-z0-9]{1,}$'
    }
]

export const inputDataLogin = [
 
    {
        id: 1,
        type: 'email',
        name: 'email',
        placeholder: 'Email Address',
        required: true,
        errMsg: 'Looks like this is not an email',
        pattern: '^(?:(?!.*?[.]{2})[a-zA-Z0-9](?:[a-zA-Z0-9.+!%-]{1,64}|)|"[a-zA-Z0-9.+!% -]{1,64}")@[a-zA-Z0-9][a-zA-Z0-9.-]+(.[a-z]{2,}|.[0-9]{1,})$'
    },
    {
        id: 2,
        type: 'password',
        name: 'password',
        placeholder: 'Enter Password',
        required: true,
        errMsg: 'Password error',
        // pattern: '^[A-Za-z0-9]{1,}$'
    },
]