import {addonsPick} from '@/constants/constants';
import {Form, Formik} from 'formik';
import AddonsListItem from '../AddonsListItem/AddonsListItem';
import {Link, useNavigate} from 'react-router-dom';
import {useData} from '@/Provider';
import {MainRoutes} from '@/environment/variables';

function Addons() {
  const navigate = useNavigate();
  const {state, dispatch} = useData();

  return (
    <Formik
      initialValues={state.addons}
      onSubmit={async (values, {setSubmitting}) => {
        dispatch({type: 'addons', payload: values});
        navigate(MainRoutes.summary);
        setSubmitting(false);
      }}>
      {({values, isSubmitting}) => (
        <Form className="flex flex-col justify-between grow mt-8">
          <ul
            role="group"
            id="my-radio-group"
            aria-labelledby="my-radio-group"
            className="flex flex-col gap-4">
            {addonsPick.map(el => (
              <li key={el.text}>
                <label>
                  <AddonsListItem
                    data={el}
                    billing={state.plan?.billing}
                    value={values[el.text]}
                  />
                </label>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mobile:fixed mobile:flex mobile:items-center mobile:w-full mobile:bg-white mobile:right-0 mobile:bottom-0 mobile:p-4">
            <Link
              to={MainRoutes.plan}
              className="text-Cool-Gray transition border-none hover:text-Marine-Blue flex items-center">
              Go Back
            </Link>
            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-Marine-Blue self-end border-none transition-opacity hover:opacity-90 mobile:rounded">
              Next Step
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Addons;
