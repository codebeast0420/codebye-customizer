import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";

const ContactModal = ({ hide }) => {

	const formRef = useRef();

	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("https://codeby-backend.vercel.app/mail", {
				from: form.email,
				text: form.message,
			})
			.then((res) => {
				alert("Thank you. We will get back to you as soon as possible.");
				hide();
				setForm({
					name: "",
					email: "",
					message: "",
				});
			})

		// emailjs
		// 	.send(
		// 		"service_whuxj0o",
		// 		"template_73xpiqg",
		// 		{
		// 			from_name: form.name,
		// 			to_name: "David Evans",
		// 			from_email: form.email,
		// 			to_email: "johnleedevlead@gmail.com, codebeast0420@gmail.com, hello@codebyedge.com, david.evans@codebyedge.com",
		// 			message: form.message,
		// 		},
		// 		"8lUOVKLjkzOm91o7c"
		// 	)
		// 	.then(
		// 		() => {
		// 			alert("Thank you. I will get back to you as soon as possible.");
		// 			hide();
		// 			setForm({
		// 				name: "",
		// 				email: "",
		// 				message: "",
		// 			});
		// 		},
		// 		(error) => {
		// 			console.error(error);

		// 			alert("Ahh, something went wrong. Please try again.");
		// 		}
		// 	);

	};

	return (
		<div id="emailModalMobile" className="fixed z-[51] inset-0 overflow-y-auto">
			<div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0">
				<div className="fixed inset-0 transition-opacity">
					<div className="absolute inset-0 bg-gray-500 opacity-75"></div>
				</div>
				<div className="fixed top-2 bottom-2 w-5/6 py-20 inline-block align-bottom bg-white rounded-lg text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
					<div className="bg-white px-4 pb-4 sm:p-6 sm:pb-4">
						<button
							type="button"
							className="setting-menu-tab fixed top-5 right-5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
							onClick={() => hide()}
						>
							<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
							</svg>
						</button>
						<div className="flex items-center justify-center">
							<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-center w-full">
								<h3 className="text-lg leading-6 font-medium text-gray-900 cbe-font text-xl text-teal-950">Talk to Us</h3>
								<div className="mt-4">
									<form
										className="grid justify-center"
										ref={formRef}
										onSubmit={handleSubmit}
									>
										<label className="cbe-font font-medium text-lg text-teal-950 text-left py-2">Email</label>
										<input className=""
											type="email"
											name="email"
											value={form.email}
											onChange={handleChange}
											placeholder="Enter your email" />
										<hr />
										<label className="cbe-font font-medium text-lg text-teal-950 text-left py-2">Message</label>
										<textarea
											className=""
											type="email"
											placeholder="Enter your message"
											rows="5"
											id="emailMessage"
											name="message"
											value={form.message}
											onChange={handleChange}
										/>
										<button type="submit" className="cbe-btn mt-4 sm:mt-4 lg:mt-6">Send</button>
									</form>
								</div>
							</div>
						</div>
					</div >
				</div >
			</div >
		</div >
	)
}

export default ContactModal;