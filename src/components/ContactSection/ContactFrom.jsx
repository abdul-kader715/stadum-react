import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        dateOfBirth: '',
        email: '',
        sex: 'Male'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className="from_wrap" onSubmit={handleSubmit}>
            <div>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Your Name*" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <input 
                    type="number" 
                    className="form-control" 
                    placeholder="Phone Number*" 
                    name="phoneNumber" 
                    value={formData.phoneNumber} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <input 
                    type="date" 
                    className="form-control" 
                    name="dateOfBirth" 
                    value={formData.dateOfBirth} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Email Address*" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <select 
                    className="form-control" 
                    name="sex" 
                    value={formData.sex} 
                    onChange={handleChange}
                >
                    <option disabled>Select Sex*</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div>
                <button type="submit" className="btn_primary">SEND REQUEST <i className="ti-arrow-right"></i></button>
            </div>
        </form>
    );
};

export default ContactForm;
