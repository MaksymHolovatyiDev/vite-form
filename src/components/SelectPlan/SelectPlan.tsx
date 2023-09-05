import {Field, Form, Formik} from 'formik';

function SelectPlan() {
  return (
    <>
      <p>Select your plan</p>
      <p>You have the option of monthly or yearly billing.</p>
      <Formik
        initialValues={{
          plan: '',
          billing: false,
        }}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}>
        {({values}) => (
          <Form>
            <div id="my-radio-group">Picked</div>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="picked" value="One" />
                One
              </label>
              <label>
                <Field type="radio" name="picked" value="Two" />
                Two
              </label>
              <label>
                <Field type="checkbox" name="billing" />
                {`${values.billing}`}
              </label>
              <div>Picked: {values.plan}</div>
            </div>
            <button type="button">Back</button>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default SelectPlan;
