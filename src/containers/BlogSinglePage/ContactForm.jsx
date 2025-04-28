import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    address: '',
    date: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.category) newErrors.category = 'Please select a category';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.date) newErrors.date = 'Date is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: '',
        address: '',
        date: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6 col-12">
          <input
            name="name"
            className="from-contol"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>
        <div className="col-lg-6 col-12">
          <input
            name="email"
            className="from-contol"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>
        <div className="col-lg-6 col-12">
          <input
            name="phone"
            className="from-contol"
            type="number"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <small className="text-danger">{errors.phone}</small>}
        </div>
        <div className="col-lg-6 col-12">
          <select
            name="category"
            className="from-contol"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="1">Select 1</option>
            <option value="2">Select 2</option>
          </select>
          {errors.category && <small className="text-danger">{errors.category}</small>}
        </div>
        <div className="col-lg-6 col-12">
          <input
            name="address"
            className="from-contol"
            type="text"
            placeholder="Office address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <small className="text-danger">{errors.address}</small>}
        </div>
        <div className="col-lg-6 col-12">
          <input
            name="date"
            className="from-contol"
            type="date"
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <small className="text-danger">{errors.date}</small>}
        </div>
        <div className="col-12 mt-3">
          <button type="submit" className="btn_primary">Contact Now</button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
