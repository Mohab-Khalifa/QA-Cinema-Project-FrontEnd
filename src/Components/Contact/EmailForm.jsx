import React, { useState } from "react";

/* Tutorial used from https://w3collective.com/react-contact-form/
   alongside NodeMailer documentation */

const EmailForm = () => {

    const [status, setStatus] = useState("Submit");

    const submitHandler = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        const { name, email, subject, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value,
        };

        // Post fetch request currently using 5000 for fetch API
        let response = await fetch("http://localhost:5000/contactus", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });

        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required />
            </div>
            <div>
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" required />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" required />
            </div>
            <button type="submit">{status}</button>
        </form>
    );
};

export default EmailForm;