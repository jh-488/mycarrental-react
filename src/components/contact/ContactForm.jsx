import { useFormik } from "formik";
import * as yup from "yup";

const ContactForm = ({setIsFormSubmitted}) => {
  const { values, errors, handleChange, touched, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("Please add a name"),
      email: yup
        .string()
        .email("Please enter a valid email")
        .required("Please add an email"),
      subject: yup.string(),
      message: yup.string().required("Please add a message"),
    }),
    onSubmit: (values, actions) => {
      setIsFormSubmitted(true);
      actions.resetForm();
    },
  });

  return (
    <div className="contact-form">
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div className="field">
                    <label htmlFor="name">Name <span>*</span>:</label>
                    <div>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            value={values.name}
                            onChange={handleChange}
                            className={errors.name && touched.name ? "input__error" : ""}
                        />
                        <div className="error-container">
                            {errors.name && touched.name && <p className="error__message">{errors.name}</p>}
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="email">Email <span>*</span>:</label>
                    <div>
                        <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        value={values.email}
                        onChange={handleChange}
                        className={errors.email && touched.email ? "input__error" : ""}
                        />
                        <div className="error-container">
                            {errors.email && touched.email && <p className="error__message">{errors.email}</p>}
                        </div>
                    </div>
                    </div>
                <div className="field">
                    <label htmlFor="subject">Subject:</label>
                    <div>
                        <input 
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Type the subject"
                            value={values.subject}
                            onChange={handleChange}
                            className={errors.subject && touched.subject ? "input__error" : ""}
                        />
                        <div className="error-container">
                            {errors.subject && touched.subject && <p className="error__message">{errors.subject}</p>}
                        </div>
                    </div>
                    </div>
                <div className="field">
                    <label htmlFor="message">Message <span>*</span>:</label>
                    <div>
                        <textarea 
                            name="message"
                            id="message" 
                            cols="30" 
                            rows="10"
                            placeholder="Your message..."
                            value={values.message}
                            onChange={handleChange}
                            className={errors.message && touched.message ? "input__error" : ""}
                        >
                        </textarea>
                        <div className="error-container">
                            {errors.message && touched.message && <p className="error__message">{errors.message}</p>}
                        </div>
                    </div>
                </div>
                <button type="submit">
                    Send Message
                </button>
            </fieldset>
        </form>
    </div>
    );
};

export default ContactForm;
