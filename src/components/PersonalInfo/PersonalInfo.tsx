import {Field, Form, Formik} from 'formik';

function PersonalInfo() {
  return (
    <div>
      <p>Personal info</p>
      <p>Please provide your name, email, address, phone number.</p>
      <Formik
        initialValues={{name: '', email: '', password: ''}}
        onSubmit={(values, {setSubmitting}) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}>
        {({values, handleBlur, handleChange, handleSubmit, isSubmitting}) => (
          <Form onSubmit={handleSubmit}>
            <label>
              Name
              <Field
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="e.g. Stephen King"
              />
            </label>
            <label>
              Email Address
              <Field
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="e.g. stephenking@lorem.com"
              />
            </label>
            <label>
              Phone Number
              <Field
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="e.g. +1 234 567 890"
              />
            </label>
            <button type="submit" disabled={isSubmitting}>
              Next Step
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default PersonalInfo;
