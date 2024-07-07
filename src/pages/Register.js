import React, { useState } from 'react';
import './css/Register.css'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        gender: '',
        accountInfo: {
            sponsorUsername: '',
            placementUser: '',
            placementNetwork: '',
            username: '',
            password: '',
            confirmPassword: '',
            securityPin: '',
            confirmSecurityPin: '',
            fullName: '',
            email: ''
        },
        registrationPackage: {
            package: '',
            existingPin: ''
        }
    });

    const handleChange = (section, name, value) => {
        if (section) {
            setFormData({
                ...formData,
                [section]: {
                    ...formData[section],
                    [name]: value
                }
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log(formData);
    };

    return (
        <div className="container">
            <div className="title">
                <p>Registration</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="user_details">
                    <div className="input_box">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={(e) => handleChange(null, 'name', e.target.value)}
                            required
                        />
                    </div>
                    <div className="input_box">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            value={formData.username}
                            onChange={(e) => handleChange(null, 'username', e.target.value)}
                            required
                        />
                    </div>
                    <div className="input_box">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) => handleChange(null, 'email', e.target.value)}
                            required
                        />
                    </div>
                    <div className="input_box">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="number"
                            id="phone"
                            name="phone"
                            placeholder="Enter your number"
                            value={formData.phone}
                            onChange={(e) => handleChange(null, 'phone', e.target.value)}
                            required
                        />
                    </div>
                    <div className="input_box">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={(e) => handleChange(null, 'password', e.target.value)}
                            required
                        />
                    </div>
                    <div className="input_box">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={(e) => handleChange(null, 'confirmPassword', e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="gender">
                    <span className="gender_title">Gender</span>
                    <input
                        type="radio"
                        name="gender"
                        id="radio_1"
                        value="Male"
                        onChange={(e) => handleChange(null, 'gender', e.target.value)}
                        checked={formData.gender === 'Male'}
                    />
                    <input
                        type="radio"
                        name="gender"
                        id="radio_2"
                        value="Female"
                        onChange={(e) => handleChange(null, 'gender', e.target.value)}
                        checked={formData.gender === 'Female'}
                    />
                    <input
                        type="radio"
                        name="gender"
                        id="radio_3"
                        value="Prefer not to say"
                        onChange={(e) => handleChange(null, 'gender', e.target.value)}
                        checked={formData.gender === 'Prefer not to say'}
                    />
                    <div className="category">
                        <label htmlFor="radio_1">
                            <span className="dot one"></span>
                            <span>Male</span>
                        </label>
                        <label htmlFor="radio_2">
                            <span className="dot two"></span>
                            <span>Female</span>
                        </label>
                        <label htmlFor="radio_3">
                            <span className="dot three"></span>
                            <span>Prefer not to say</span>
                        </label>
                    </div>
                </div>
                <div className="form_section">
                    <h3>Account Information</h3>
                    <div className="form_group">
                        <label>Sponsor Username *</label>
                        <input
                            type="text"
                            onChange={(e) => handleChange('accountInfo', 'sponsorUsername', e.target.value)}
                            required
                        />
                        <label>Placement User *</label>
                        <input
                            type="text"
                            onChange={(e) => handleChange('accountInfo', 'placementUser', e.target.value)}
                            required
                        />
                    </div>
                    <div className="form_group">
                        <label>Placement Network *</label>
                        <div>
                            <input
                                type="radio"
                                name="placementNetwork"
                                value="left"
                                onChange={(e) => handleChange('accountInfo', 'placementNetwork', e.target.value)}
                                required
                            /> Left
                            <input
                                type="radio"
                                name="placementNetwork"
                                value="right"
                                onChange={(e) => handleChange('accountInfo', 'placementNetwork', e.target.value)}
                                required
                            /> Right
                        </div>
                    </div>
                    <div className="form_group">
                        <label>Username *</label>
                        <input
                            type="text"
                            onChange={(e) => handleChange('accountInfo', 'username', e.target.value)}
                            required
                        />
                    </div>
                    <div className="form_group">
                        <label>Password *</label>
                        <input
                            type="password"
                            onChange={(e) => handleChange('accountInfo', 'password', e.target.value)}
                            required
                        />
                        <label>Confirm Password *</label>
                        <input
                            type="password"
                            onChange={(e) => handleChange('accountInfo', 'confirmPassword', e.target.value)}
                            required
                        />
                    </div>
                    <div className="form_group">
                        <label>Security PIN *</label>
                        <input
                            type="text"
                            onChange={(e) => handleChange('accountInfo', 'securityPin', e.target.value)}
                            required
                        />
                        <label>Confirm Security PIN *</label>
                        <input
                            type="text"
                            onChange={(e) => handleChange('accountInfo', 'confirmSecurityPin', e.target.value)}
                            required
                        />
                    </div>
                    <div className="form_group">
                        <label>Full Name *</label>
                        <input
                            type="text"
                            onChange={(e) => handleChange('accountInfo', 'fullName', e.target.value)}
                            required
                        />
                        <label>Email *</label>
                        <input
                            type="email"
                            onChange={(e) => handleChange('accountInfo', 'email', e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="form_section">
                    <h3>Member Registration Package</h3>
                    <div className="form_group">
                        <label>Package *</label>
                        <select
                            onChange={(e) => handleChange('registrationPackage', 'package', e.target.value)}
                            required
                        >
                            <option value="">Select Package</option>
                            <option value="basic">Basic</option>
                            <option value="premium">Premium</option>
                            <option value="vip">VIP</option>
                        </select>
                        <label>Existing Security PIN *</label>
                        <input
                            type="text"
                            onChange={(e) => handleChange('registrationPackage', 'existingPin', e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="reg_btn">
                    <input type="submit" value="Register" />
                </div>
            </form>
        </div>
    );
};

export default Register;
