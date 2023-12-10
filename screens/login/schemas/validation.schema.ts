import * as Yup from 'yup';

const schema = Yup.object().shape({
    email: Yup.string().email('Provide a valid email address').required('E-mail is required'),
    password: Yup.string().min(8, 'Password must be at least 8 character').required('Password is required'),
});

export default schema;
