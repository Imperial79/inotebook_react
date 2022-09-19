import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
	const [credentials, setCredentials] = useState({
		name: "",
		email: "",
		password: "",
		cpassword: "",
	});
	let navigate = useNavigate();

	const host = "http://localhost:5000";

	const onChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { name, email, password } = credentials;
		const response = await fetch(`${host}/api/auth/createUser`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name, email, password
			}),
		});
		const json = await response.json();
		console.log(json);

		if (json.success) {
			localStorage.setItem("token", json.authToken);
			//  Navigating to home after signup
			navigate("/");
			props.showAlert('success', 'Account created successfully');

		} else {

			props.showAlert('danger', json.error);
		}
	}

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				{/* ------------NAME---------- */}
				<div className="mb-3">
					<label htmlFor="name" className="form-label">
						Name
					</label>
					<input
						type="name"
						className="form-control"
						id="name"
						value={credentials.name}
						name="name"
						onChange={onChange}
					/>
				</div>
				{/* ------------EMAIL ADDRESS---------- */}
				<div className="mb-3">
					<label htmlFor="email" className="form-label">
						Email address
					</label>
					<input
						type="email"
						className="form-control"
						id="email"
						value={credentials.email}
						aria-describedby="emailHelp"
						name="email"
						onChange={onChange}
					/>
					<div id="emailHelp" className="form-text">
						We'll never share your email with anyone else.
					</div>
				</div>
				{/* ------------PASSWORD---------- */}
				<div className="mb-3">
					<label htmlFor="password" className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						id="password"
						name="password"
						value={credentials.password} required minLength={5}
						onChange={onChange}
					/>
				</div>
				{/* ------------CONFIRM PASSWORD---------- */}
				<div className="mb-3">
					<label htmlFor="password" className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						id="cpassword"
						name="cpassword"
						value={credentials.cpassword} required minLength={5}
						onChange={onChange}
					/>
				</div>
				{/* ------------SIGNUP BUTTON---------- */}
				<button type="submit" className="btn btn-primary">
					Signup
				</button>
			</form>
		</div>
	);
};

export default Signup;
