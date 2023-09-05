import {Formik} from 'formik';

function PersonalInfo() {
  return (
    <div>
      <p>Personal info</p>
      <p>Please provide your name, email, address, phone number.</p>
      <form></form>
      <button type="button">Next Step</button>
      <Formik
        initialValues={{name: '', email: '', password: ''}}
        onSubmit={(values, {setSubmitting}) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}>
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default PersonalInfo;
