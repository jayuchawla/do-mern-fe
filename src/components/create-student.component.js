// CreateStudent Component for add new student

// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import StudentForm from "./StudentForm";

console.log(process.env);
// CreateStudent Component
const CreateStudent = () => {
	const [formValues, setFormValues] =
		useState({ name: '', email: '', rollno: '' })
	// onSubmit handler
	const onSubmit = studentObject => {
		axios.post(
			(process.env.REACT_APP_API_HOST + '/students/create-student'),
			studentObject)
			.then(res => {
				if (res.status === 200)
					alert('Student successfully created')
				else
					Promise.reject()
			})
			.catch(err => alert('Something went wrong'))
	}

	// Return student form
	return (
		<div>
			<StudentForm initialValues={formValues}
				onSubmit={onSubmit}
				enableReinitialize>
				Create Student
			</StudentForm>
		</div>

	)
}

// Export CreateStudent Component
export default CreateStudent
