import React, { useState } from 'react';
import axios from 'axios';
import './form.css';

export const Form = () => {
    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        age: '',
        highestEducationLevel: '',
        instituteCompleted: '',
        fieldOfStudy: '',
        hasWorkExperience: 'No',
        jobTitle: '',
        companyName: '',
        jobDuties: '',
        instituteInCanada: '',
        programInCanada: '',
        applyingCountry: '',
        futureGoals: '',
        englishListeningScore: '',
        englishReadingScore: '',
        englishSpeakingScore: '',
        englishWritingScore: '',
        firstYearTuitionPaid: 'No',
        tuitionFeePaid: '',
        didGIC: 'No',
        gicAmountPaid: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post("/api/sendSOP", formData).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        })
        // try {
        //     const response = await fetch('localhost:5000/api/sendSOP', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(formData),
        //     });

        //     if (response.ok) {
        //         console.log('Form submitted successfully');
        //     } else {
        //         console.error('Form submission failed');
        //     }
        // } catch (error) {
        //     console.error('Error:', error);
        // }
       
    };

    return (
        <div className="App">
            <div className="container mt-5">
                <div className="form-container border rounded p-4">
                    <h1 className="mb-4">Customized SOP Generator</h1>
                    <p>
                        Fill this questionnaire for the student. After submitting, you will
                        receive an email at the email address that you have provided with a
                        Statement of Purpose customized for you. You can use and modify that as
                        per your needs.
                    </p>
                    <p>
                        If you would like to get it edited, reviewed, or drafted by our experts,
                        you can get in touch with us:{' '}
                        <a href="https://effizient-immigration-inc.square.site/s/shop">
                            https://effizient-immigration-inc.square.site/s/shop
                        </a>
                    </p>
                    <form onSubmit={handleSubmit}>
                        {/* Email */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email<span className="text-danger">*</span>
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* Full Name */}
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">
                                Full Name<span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* Age */}
                        <div className="mb-3">
                            <label htmlFor="age" className="form-label">
                                Age<span className="text-danger">*</span>
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="age"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* Highest Level of Education */}
                        <div className="mb-3">
                            <label htmlFor="highestEducationLevel" className="form-label">
                                Highest Level of Education<span className="text-danger">*</span>
                            </label>
                            <div className="input-group">
                                <button
                                    className="btn btn-outline-secondary dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {formData.highestEducationLevel
                                        ? formData.highestEducationLevel
                                        : 'Select Education Level'}
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="#"
                                            onClick={() =>
                                                handleChange({
                                                    target: { name: 'highestEducationLevel', value: 'High School' },
                                                })
                                            }
                                        >
                                            High School
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="#"
                                            onClick={() =>
                                                handleChange({
                                                    target: { name: 'highestEducationLevel', value: 'Associate Degree' },
                                                })
                                            }
                                        >
                                            Associate Degree
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="#"
                                            onClick={() =>
                                                handleChange({
                                                    target: { name: 'highestEducationLevel', value: 'Bachelor\'s Degree' },
                                                })
                                            }
                                        >
                                            Bachelor's Degree
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="#"
                                            onClick={() =>
                                                handleChange({
                                                    target: { name: 'highestEducationLevel', value: 'Master\'s Degree' },
                                                })
                                            }
                                        >
                                            Master's Degree
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="#"
                                            onClick={() =>
                                                handleChange({
                                                    target: { name: 'highestEducationLevel', value: 'Ph.D.' },
                                                })
                                            }
                                        >
                                            Ph.D.
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="#"
                                            onClick={() =>
                                                handleChange({
                                                    target: { name: 'highestEducationLevel', value: 'Other' },
                                                })
                                            }
                                        >
                                            Other
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Institute where you completed your highest level of education */}
                        <div className="mb-3">
                            <label htmlFor="instituteCompleted" className="form-label">
                                Institute where you completed your highest level of education
                                <span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="instituteCompleted"
                                name="instituteCompleted"
                                value={formData.instituteCompleted}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* What did you study */}
                        <div className="mb-3">
                            <label htmlFor="fieldOfStudy" className="form-label">
                                What did you study<span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="fieldOfStudy"
                                name="fieldOfStudy"
                                value={formData.fieldOfStudy}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* Do you have any relevant work experience? */}
                        <div className="mb-3">
                            <label className="form-label">
                                Do you have any relevant work experience?<span className="text-danger">*</span>
                            </label>
                            <div>
                                <input
                                    type="radio"
                                    id="hasWorkExperienceYes"
                                    name="hasWorkExperience"
                                    value="Yes"
                                    onChange={handleChange}
                                    checked={formData.hasWorkExperience === 'Yes'}
                                    required
                                />
                                <label htmlFor="hasWorkExperienceYes" className="form-check-label">
                                    Yes
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="hasWorkExperienceNo"
                                    name="hasWorkExperience"
                                    value="No"
                                    onChange={handleChange}
                                    checked={formData.hasWorkExperience === 'No'}
                                    required
                                />
                                <label htmlFor="hasWorkExperienceNo" className="form-check-label">
                                    No
                                </label>
                            </div>
                        </div>
                        {/* Job Title */}
                        {formData.hasWorkExperience === 'Yes' && (
                            <div className="mb-3">
                                <label htmlFor="jobTitle" className="form-label">
                                    Job Title
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="jobTitle"
                                    name="jobTitle"
                                    value={formData.jobTitle}
                                    onChange={handleChange}
                                />
                            </div>
                        )}
                        {/* Company Name */}
                        {formData.hasWorkExperience === 'Yes' && (
                            <div className="mb-3">
                                <label htmlFor="companyName" className="form-label">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="companyName"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                />
                            </div>
                        )}
                        {/* Job duties */}
                        {formData.hasWorkExperience === 'Yes' && (
                            <div className="mb-3">
                                <label htmlFor="jobDuties" className="form-label">
                                    Job duties
                                </label>
                                <textarea
                                    className="form-control"
                                    id="jobDuties"
                                    name="jobDuties"
                                    value={formData.jobDuties}
                                    onChange={handleChange}
                                />
                            </div>
                        )}
                        {/* This is a required question */}
                        <div className="mb-3">
                            <label htmlFor="instituteInCanada" className="form-label">
                                What institute did you get admitted to in Canada?<span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="instituteInCanada"
                                name="instituteInCanada"
                                value={formData.instituteInCanada}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* What is your program of study in Canada? */}
                        <div className="mb-3">
                            <label htmlFor="programInCanada" className="form-label">
                                What is your program of study in Canada?<span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="programInCanada"
                                name="programInCanada"
                                value={formData.programInCanada}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* Which country are you applying from? */}
                        <div className="mb-3">
                            <label htmlFor="applyingCountry" className="form-label">
                                Which country are you applying from?<span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="applyingCountry"
                                name="applyingCountry"
                                value={formData.applyingCountry}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* What are your future goals? */}
                        <div className="mb-3">
                            <label htmlFor="futureGoals" className="form-label">
                                What are your future goals?<span className="text-danger">*</span>
                            </label>
                            <textarea
                                className="form-control"
                                id="futureGoals"
                                name="futureGoals"
                                value={formData.futureGoals}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* English Scores - Listening */}
                        <div className="mb-3">
                            <label htmlFor="englishListeningScore" className="form-label">
                                English Scores - Listening<span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="englishListeningScore"
                                name="englishListeningScore"
                                value={formData.englishListeningScore}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* English Scores - Reading */}
                        <div className="mb-3">
                            <label htmlFor="englishReadingScore" className="form-label">
                                English Scores - Reading<span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="englishReadingScore"
                                name="englishReadingScore"
                                value={formData.englishReadingScore}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* English Scores - Speaking */}
                        <div className="mb-3">
                            <label htmlFor="englishSpeakingScore" className="form-label">
                                English Scores - Speaking<span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="englishSpeakingScore"
                                name="englishSpeakingScore"
                                value={formData.englishSpeakingScore}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* English Scores - Writing */}
                        <div className="mb-3">
                            <label htmlFor="englishWritingScore" className="form-label">
                                English Scores - Writing<span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="englishWritingScore"
                                name="englishWritingScore"
                                value={formData.englishWritingScore}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* Did you pay your first-year tuition? */}
                        <div className="mb-3">
                            <label className="form-label">
                                Did you pay your first-year tuition?<span className="text-danger">*</span>
                            </label>
                            <div>
                                <input
                                    type="radio"
                                    id="firstYearTuitionPaidYes"
                                    name="firstYearTuitionPaid"
                                    value="Yes"
                                    onChange={handleChange}
                                    checked={formData.firstYearTuitionPaid === 'Yes'}
                                    required
                                />
                                <label htmlFor="firstYearTuitionPaidYes" className="form-check-label">
                                    Yes
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="firstYearTuitionPaidNo"
                                    name="firstYearTuitionPaid"
                                    value="No"
                                    onChange={handleChange}
                                    checked={formData.firstYearTuitionPaid === 'No'}
                                    required
                                />
                                <label htmlFor="firstYearTuitionPaidNo" className="form-check-label">
                                    No
                                </label>
                            </div>
                        </div>
                        {/* Tuition Fee Paid */}
                        {formData.firstYearTuitionPaid === 'Yes' && (
                            <div className="mb-3">
                                <label htmlFor="tuitionFeePaid" className="form-label">
                                    How much tuition fee did you pay?
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="tuitionFeePaid"
                                    name="tuitionFeePaid"
                                    value={formData.tuitionFeePaid}
                                    onChange={handleChange}
                                />
                            </div>
                        )}
                        {/* Did you do a GIC? */}
                        <div className="mb-3">
                            <label className="form-label">
                                Did you do a GIC?<span className="text-danger">*</span>
                            </label>
                            <div>
                                <input
                                    type="radio"
                                    id="didGICYes"
                                    name="didGIC"
                                    value="Yes"
                                    onChange={handleChange}
                                    checked={formData.didGIC === 'Yes'}
                                    required
                                />
                                <label htmlFor="didGICYes" className="form-check-label">
                                    Yes
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="didGICNo"
                                    name="didGIC"
                                    value="No"
                                    onChange={handleChange}
                                    checked={formData.didGIC === 'No'}
                                    required
                                />
                                <label htmlFor="didGICNo" className="form-check-label">
                                    No
                                </label>
                            </div>
                        </div>
                        {/* GIC Amount Paid */}
                        {formData.didGIC === 'Yes' && (
                            <div className="mb-3">
                                <label htmlFor="gicAmountPaid" className="form-label">
                                    How much did you pay towards GIC?
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="gicAmountPaid"
                                    name="gicAmountPaid"
                                    value={formData.gicAmountPaid}
                                    onChange={handleChange}
                                />
                            </div>
                        )}
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit} >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
