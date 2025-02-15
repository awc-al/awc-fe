import { useState } from "react";
import styles from "@/styles/contactForm.module.css";

export default function ContactForm() {
    // State to store input values
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        message: "",
    });

    // State for error messages
    const [errors, setErrors] = useState({
        fullName: "",
        phoneNumber: "",
        message: "",
    });

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear errors when the user starts typing
        setErrors({ ...errors, [name]: "" });
    };

    // Validate form inputs
    const validateForm = () => {
        let isValid = true;
        let newErrors = { fullName: "", phoneNumber: "", message: "" };

        // Full Name Validation
        if (formData.fullName.trim().length < 3) {
            newErrors.fullName = "Full Name must be at least 3 characters.";
            isValid = false;
        }

        // Phone Number Validation (Albanian or international)
        const phoneRegex = /^\+?\d{9,15}$/;
        if (!phoneRegex.test(formData.phoneNumber.trim())) {
            newErrors.phoneNumber = "Enter a valid phone number.";
            isValid = false;
        }

        // Message Validation
        if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            console.log("Form Data Submitted:", formData);

            // Send data to API (Example)
            // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });

            // Reset form after submission
            setFormData({ fullName: "", phoneNumber: "", message: "" });
        }
    };

    return (
        <section className={styles.container}>
            <div className={styles.formWrapper}>
                <h2 className={styles.title}>Get In Touch</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            className={styles.input}
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                        {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}
                    </div>

                    {/* Phone Number */}
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            className={styles.input}
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                        {errors.phoneNumber && <p className={styles.error}>{errors.phoneNumber}</p>}
                    </div>

                    {/* Message */}
                    <div className={styles.inputGroup}>
                        <textarea
                            name="message"
                            placeholder="Message"
                            className={styles.textarea}
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        {errors.message && <p className={styles.error}>{errors.message}</p>}
                    </div>

                    {/* Error Messages Block */}
                    <div className={styles.errorBlock}>
                        {Object.values(errors).some(error => error) && (
                            <p className={styles.errorText}>Please fix the errors above.</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className={styles.submitButton}>
                        SUBMIT
                    </button>
                </form>
            </div>
        </section>
    );
}
