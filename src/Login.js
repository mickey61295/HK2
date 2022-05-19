import React, { useContext } from 'react'
import { UserContext } from './Contexts/UserContext'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { useFormik } from 'formik'
// import { API } from './global'
import TextField from '@mui/material/TextField'

const API = 'https://mickeyhk2.herokuapp.com'
const loginValidationSchema = yup.object({
	email: yup
		.string()
		.min(4, 'Atleast 4 characters')
		.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i),
	name: yup.string().required('Name is required'),
	password: yup
		.string()
		.min(8, 'Password must be minimum 4 characters')
		.max(16, 'Password must be maximum 16 characters')
		.required('Password is required'),
})

export default function Login() {
	const { user, setUser } = useContext(UserContext)
	const loginsend = (values) => {
		const creds = {
			username: values.name,
			password: values.password,
		}
		fetch(`${API}/users/login`, {
			method: 'POST',
			body: JSON.stringify(creds),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((data) => data.json())
			.then((data) => {
				setUser(data)
			})
			.then(() => formik.resetForm())
			.then(() => navigate('/'))
	}
	const navigate = useNavigate()
	const formik = useFormik({
		initialValues: {
			name: '',
			password: '',
		},
		validationSchema: loginValidationSchema,
		onSubmit: (values) => {
			loginsend(values)
		},
	})

	return (
		<form onSubmit={formik.handleSubmit} className="Login">
			<TextField
				fullWidth
				label="username"
				variant="standard"
				name="name"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				error={formik.touched.name && formik.errors.name}
				helperText={
					formik.touched.name && formik.errors.name ? formik.errors.name : ''
				}
			/>

			<TextField
				fullWidth
				variant="standard"
				name="password"
				label="password"
				type="password"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				error={formik.touched.password && formik.errors.password}
				helperText={
					formik.touched.password && formik.errors.password
						? formik.errors.password
						: ''
				}
			/>

			<Button type="submit" variant="contained">
				Login
			</Button>
		</form>
	)
}
