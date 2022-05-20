import React, { useContext, useState } from 'react'
import { UserContext } from './Contexts/UserContext'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { API } from './global'
import TextField from '@mui/material/TextField'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

const loginValidationSchema = yup.object({
	email: yup
		.string()
		.min(4, 'Atleast 4 characters')
		.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i),
	name: yup.string().required('Name is required'),
	password: yup
		.string()
		.min(8, 'Password must be minimum 8 characters')
		.max(16, 'Password must be maximum 16 characters')
		.required('Password is required'),
})

function popup({message}) {
	toastr.options = {
		positionClass: 'toast-top-full-width',
		hideDuration: 500,
		timeOut: 1000,
	}
	toastr.clear()
	console.log(message)
	message === 'User created successfully'
		? setTimeout(() => toastr.success(message), 100)
		: setTimeout(() => toastr.error(message), 100)
}

	export default function Register() {
		const { user, setUser } = useContext(UserContext)
	const [res, setRes] = useState(null)
	const loginsend = (values) => {
		const creds = {
			username: values.name,
			password: values.password,
		}
		console.log(creds)
		fetch(`${API}/users/signup`, {
			method: 'POST',
			body: JSON.stringify(creds),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => {
				return response.json()
			})
			.then((responseData) => {
				setRes(responseData)
			})
			.then(() => {
				popup(res)
			})
			.then(() => formik.resetForm())
			.then(() =>
				res.message === 'User created successfully' ? navigate('/login') : ''
			)
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
				Register
			</Button>
		</form>
	)
}
