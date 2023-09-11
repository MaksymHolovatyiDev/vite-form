import {addonsPick} from '@/constants/constants';
import {Form, Formik} from 'formik';
import AddonsListItem from '../AddonsListItem/AddonsListItem';
import {useNavigate} from 'react-router-dom';
import {useData} from '@/Providers/DataProvider';
import {MainRoutes} from '@/environment/MainRoutes';
import MainButtons from '@components/MainButtons/MainButtons';
import {useDefaultRedirect} from '@/Hooks';

function Addons() {
  const navigate = useNavigate();
  const {state, dispatch} = useData();

  useDefaultRedirect();

  return (
    <Formik
      initialValues={state.addons}
      onSubmit={async (values, {setSubmitting}) => {
        dispatch({type: 'addons', payload: values});
        navigate(MainRoutes.Summary);
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

          <MainButtons
            isSubmitting={isSubmitting}
            routeBackward={MainRoutes.Plan}
          />
        </Form>
      )}
    </Formik>
  );
}

export default Addons;
