import {Field, Form, Formik} from 'formik';

function PersonalInfo() {
  return (
    <div className="base-container">
      <p className="main-title">Personal info</p>
      <p className="text-Cool-Gray">
        Please provide your name, email, address, phone number.
      </p>
      <Formik
        initialValues={{name: '', email: '', password: ''}}
        onSubmit={(values, {setSubmitting}) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}>
        {({values, handleBlur, handleChange, handleSubmit, isSubmitting}) => (
          <Form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between mt-5 grow">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-Marine-Blue">
                Name
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="e.g. Stephen King"
                required
                className="main-input mb-1"
              />

              <label htmlFor="email" className="text-Marine-Blue">
                Email Address
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="e.g. stephenking@lorem.com"
                required
                className="main-input mb-1"
              />
              <label htmlFor="password" className="text-Marine-Blue">
                Phone Number
              </label>
              <Field
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="e.g. +1 234 567 890"
                required
                className="main-input"
              />
            </div>
            <button
              type="submit"
              className="bg-Marine-Blue self-end"
              disabled={isSubmitting}>
              Next Step
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default PersonalInfo;
