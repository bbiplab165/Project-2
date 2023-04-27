import React, { useState } from 'react';
import Style from './Registration_2.module.css'

function RegistrationPage() {
    const [registrationError,setRegistrationError]=useState('')
    const [isUsingEmail, setIsUsingEmail] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        birthMonth: '',
        birthDay: '',
        birthYear: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

        const existingUser = storedUsers.find(
            (user) =>
                user.email === formData.email || user.phoneNumber === formData.phoneNumber
        );

        if (existingUser) {
            setRegistrationError("Email or phone number already exists");
            return;
        }

        const newUser = {
            name: formData.name,
            birthMonth: formData.birthMonth,
            birthDay: formData.birthDay,
            birthYear: formData.birthYear,
            ...(formData.email ? { email: formData.email } : { phoneNumber: formData.phoneNumber }),
        };

        const updatedUsers = [...storedUsers, newUser];

        localStorage.setItem("users", JSON.stringify(updatedUsers));



        const confirmation = window.confirm('User registered successfully! Click OK to go to home page.');
        // if (confirmation) {
        //     window.location.href = '/';
        // }
    };
    const handleUseEmailInstead = () => {
        setIsUsingEmail((prevIsUsingEmail) => !prevIsUsingEmail);
    };

    const monthOptions = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return (
        <div className={Style.Registration_2}>
            <h1>Create your account</h1>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Name"
                    onChange={handleInputChange}
                />
                <br />
                {!isUsingEmail && (
                    <input
                        type="number"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                    />
                )}

                {isUsingEmail && (
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                )}

                <span onClick={handleUseEmailInstead}>
                    {isUsingEmail ? `Use phone instead ` : "Use email instead"}
                </span>
                <br />
                <label>
                    Date of birth:
                    <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                    <select name="birthMonth" value={formData.birthMonth} onChange={handleInputChange} >
                        <option value="">Month</option>
                        {monthOptions.map((month, index) => (
                            <option key={index} value={month}>
                                {month}
                            </option>
                        ))}
                    </select>
                    <select name="birthDay" value={formData.birthDay} onChange={handleInputChange} className={Style.middleSelect}>
                        <option value="">Day</option>
                        {Array.from({ length: 31 }, (element, i) => i + 1).map((day) => (
                            <option key={day} value={day}>
                                {day}
                            </option>
                        ))}
                    </select>
                    <select name="birthYear" value={formData.birthYear} onChange={handleInputChange}>
                        <option value="">Year</option>
                        {Array.from({ length: 100 }, (element, i) => new Date().getFullYear() - i).map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </label>
                <br />
                {registrationError && <p className={Style.error}>{registrationError}</p>}
                <br/>
                <button type="submit" className={Style.subButton}>Create account</button>
            </form >
        </div >
    );
}

export default RegistrationPage;
