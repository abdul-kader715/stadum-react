import React, { useState } from 'react';
import './DonationWidget.css'; // optional for styling

const DonationWidget = () => {
  const goalAmount = 85000;
  const donatedAmount = 6000;
  const percentage = Math.min((donatedAmount / goalAmount) * 100, 100).toFixed(0);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    postcode: '',
    city: '',
    houseNo: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [selectedAmount, setSelectedAmount] = useState(200); // default selected

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.company) newErrors.company = 'Company Name is required';
    if (!formData.postcode) newErrors.postcode = 'Postcode is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.houseNo) newErrors.houseNo = 'House No is required';
    if (!formData.agree) newErrors.agree = 'You must agree to the terms';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
   
    }
  };

  return (
    <div className="widget_causes">
      <div className="causes_content">
        <div className="donet_progres">
          <div className="progres">
            <div className="bar" style={{ width: `${percentage}%` }}></div>
            <p className="percent">{percentage}%</p>
          </div>
          <div className="donet_amaunt">
            <span>${goalAmount.toLocaleString()} Goal</span>
            <span>${donatedAmount.toLocaleString()} Donated</span>
          </div>
        </div>

        
        <div className="donet_btn">
          <h3>Your Donation:</h3>
          <ul>
            {[100, 200, 300, 500].map((amount) => (
              <li
                key={amount}
                className={selectedAmount === amount ? 'active' : ''}
              >
                <button type="button" onClick={() => handleAmountClick(amount)}>
                  ${amount.toFixed(2)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <form className="donet_from" onSubmit={handleSubmit}>
          <div className="title"><h3>Details:</h3></div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <input className="from-contol" name="firstName" type="text" placeholder="First Name *"
                value={formData.firstName} onChange={handleChange} />
              {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>
            <div className="col-lg-6 col-12">
              <input className="from-contol" name="lastName" type="text" placeholder="Last Name *"
                value={formData.lastName} onChange={handleChange} />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
            <div className="col-12">
              <input className="from-contol" name="email" type="email" placeholder="Email *"
                value={formData.email} onChange={handleChange} />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="col-12">
              <input className="from-contol" name="company" type="text" placeholder="Company Name *"
                value={formData.company} onChange={handleChange} />
              {errors.company && <p className="error">{errors.company}</p>}
            </div>
          </div>

          <div className="title"><h3>Address:</h3></div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <input className="from-contol" name="postcode" type="text" placeholder="Postcode *"
                value={formData.postcode} onChange={handleChange} />
              {errors.postcode && <p className="error">{errors.postcode}</p>}
            </div>
            <div className="col-lg-6 col-12">
              <input className="from-contol" name="city" type="text" placeholder="City *"
                value={formData.city} onChange={handleChange} />
              {errors.city && <p className="error">{errors.city}</p>}
            </div>
            <div className="col-12">
              <input className="from-contol" name="houseNo" type="text" placeholder="House No *"
                value={formData.houseNo} onChange={handleChange} />
              {errors.houseNo && <p className="error">{errors.houseNo}</p>}
            </div>
          </div>

          <div className="checkbox-container">
            <input type="checkbox" id="myCheckbox" name="agree"
              checked={formData.agree} onChange={handleChange} />
            <label htmlFor="myCheckbox" className="checkbox-label">
              I agree with the Team of service
            </label>
            {errors.agree && <p className="error">{errors.agree}</p>}
          </div>

          <div className="donet_from_btn">
            <button type="submit">DONATE Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonationWidget;
