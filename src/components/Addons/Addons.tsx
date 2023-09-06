import {addonsPick} from '@/constants/constants';
import {Form, Formik} from 'formik';
import AddonsListItem from '../AddonsListItem/AddonsListItem';

function Addons() {
  return (
    <div className="base-container">
      <p className="main-title">Pick add-ons</p>
      <p className="text-Cool-Gray">
        Add-ons help enhance your gaming experience.
      </p>
      <Formik
        initialValues={addonsPick.reduce(
          (acc, el) => ({...acc, [el.text.split(' ').join('')]: false}),
          {},
        )}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}>
        {() => (
          <Form className="flex flex-col justify-between grow mt-8">
            <ul
              role="group"
              id="my-radio-group"
              aria-labelledby="my-radio-group"
              className="flex flex-col gap-4">
              {addonsPick.map(el => (
                <li key={el.text}>
                  <label>
                    <AddonsListItem data={el} />
                  </label>
                </li>
              ))}
            </ul>
            <div className="flex justify-between">
              <button type="button" className="text-Cool-Gray">
                Back
              </button>
              <button type="submit" className="bg-Marine-Blue self-end">
                Next Step
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Addons;
