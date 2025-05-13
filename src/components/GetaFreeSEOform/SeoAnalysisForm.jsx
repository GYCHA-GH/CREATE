import React, { useState } from "react";
import "./SeoAnalysisForm.scss";
import Illustration from './img/illustration.svg'

export default function SeoAnalysisForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(formData.email)) newErrors.email = "Invalid email address.";
    if (!/^https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}.*$/.test(formData.website)) {
        newErrors.website = "Please enter a valid URL starting with http:// or https://";
      }
    if (!formData.consent) newErrors.consent = "Consent is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", website: "", consent: false });
  };

  return (
    <section className="SecGet">
      <div className="container">
        <div className="get-SEO-img">
          <img src={Illustration} alt="" />
        </div>
        <div className="seo-form-container">
      <form className="seo-form" onSubmit={handleSubmit}>
        <h1>Get a Free SEO Analysis!</h1>

        {submitted && (
          <div className="success-message">
            Form successfully submitted!
          </div>
        )}
        <div className="flex">
          <div className="form-group1">
          <label>Name</label>
          <div className="inputwrapper">
            <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            />
          </div>
          
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group2">
          <label>Email</label>
          <div className="inputwrapper">
            <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your working email"
            />
          </div>
          
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        </div>
        

        <div className="form-group3">
          <label>Your website URL</label>
          <div className="inputwrapper">
            <input
            name="website"
            type="url"
            value={formData.website}
            onChange={handleChange}
            placeholder="http://yoursite.com"
            />
          </div>
          
          {errors.website && <p className="error">{errors.website}</p>}
        </div>
        <div className="flex2">
          <div className="form-consent">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
          /> 
          <label>
            I agree to receive communications from Createx SEO Agency
          </label>
        </div>
        {errors.consent && <p className="error">{errors.consent}</p>}

        <button type="submit">Get a free analysis</button>
        </div>
        
      </form>
    </div>
      </div>
    </section>
  );
}
