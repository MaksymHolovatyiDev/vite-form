import {Field, Form, Formik} from 'formik';

function Addons() {
  return (
    <>
      <p>Pick add-ons</p>
      <p>Add-ons help enhance your gaming experience.</p>
      <Formik
        initialValues={{
          onlineService: false,
          largerStorage: false,
          customizableProfile: false,
        }}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}>
        {() => (
          <Form>
            <div id="my-radio-group">Picked</div>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="checkbox" name="onlineService" />
              </label>
              <label>
                <Field type="checkbox" name="largerStorage" />
              </label>
              <label>
                <Field type="checkbox" name="customizableProfile" />
              </label>
            </div>
            <button type="button">Back</button>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Addons;
