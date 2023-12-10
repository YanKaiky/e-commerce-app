import * as Yup from 'yup';

const schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Provide a valid email address').required('E-mail is required'),
    password: Yup.string().min(8, 'Password must be at least 8 character').required('Password is required'),
    confirm_password: Yup.string().oneOf([Yup.ref('password'), ''], 'The fields must be the same').required('Confirmation Password is required'),
    location: Yup.string().required('Location is required'),
});

export default schema;
