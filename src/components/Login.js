import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});
	let navigate = useNavigate();

	const host = "http://localhost:5000";

	const handleSubmit = async (e) => {
		e.preventDefault();

		const response = await fetch(`${host}/api/auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: credentials.email,
				password: credentials.password,
			}),
		});
		const json = await response.json();
		console.log(json);
		if (json.success === true) {
			localStorage.setItem("token", json.authToken);

			//  Navigating to home after autentication succeeds
			navigate("/");
		} else {
			alert("Invalid Credentials");
		}
	};

	const onChanged = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">
						Email address
					</label>
					<input
						type="email"
						className="form-control"
						id="email"
						name="email"
						value={credentials.email}
						aria-describedby="emailHelp"
						onChange={onChanged}
					/>
					<div id="emailHelp" className="form-text">
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="password" className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						name="password"
						value={credentials.password}
						id="password"
						onChange={onChanged}
					/>
				</div>

				<button type="submit" className="btn btn-primary">
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
