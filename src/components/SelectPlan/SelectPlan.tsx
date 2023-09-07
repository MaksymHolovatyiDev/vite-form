import {billing, cards} from '@/constants/constants';
import {Field, Form, Formik} from 'formik';
import SelectCardItem from '../SelectCardItem/SelectCardItem';
import {useNavigate} from 'react-router-dom';
import {useData} from '@/Provider';
import {MainRoutes} from '@/environment/variables';

function SelectPlan() {
  const navigate = useNavigate();
  const {state, dispatch} = useData();

  return (
    <Formik
      initialValues={
        Object.keys(state.plan).length === 0
          ? {
              plan: cards[0].split('bg-')[1],
              billing: false,
            }
          : state.plan
      }
      onSubmit={async (values, {setSubmitting}) => {
        dispatch({type: 'plan', payload: values});
        navigate(MainRoutes.addons);
        setSubmitting(false);
      }}>
      {({values, isSubmitting}) => (
        <Form className="flex flex-col justify-between grow">
          <div
            id="my-radio-group"
            role="group"
            aria-labelledby="my-radio-group">
            <ul className="flex justify-between">
              {cards.map((el, idx) => (
                <li key={el}>
                  <label>
                    <Field
                      type="radio"
                      name="plan"
                      value={el.split('bg-')[1]}
                      className="hidden"
                    />
                    <SelectCardItem
                      card={el}
                      price={
                        values.billing ? billing.year[idx] : billing.month[idx]
                      }
                      selected={values.plan === el.split('bg-')[1]}
                      billing={values.billing}
                    />
                  </label>
                </li>
              ))}
            </ul>
            <div className="flex justify-around items-center px-32 mt-12 bg-Magnolia rounded h-12">
              <p
                className={`card-title text-base transition ${
                  values.billing ? 'text-Cool-Gray' : 'text-Marine-Blue'
                }`}>
                Monthly
              </p>
              <label>
                <div className="bg-Marine-Blue px-1 h-6 w-12 rounded-full flex justify-start items-center cursor-pointer">
                  <div
                    className={`bg-white h-5 w-5 rounded-full transition-transform ${
                      values.billing && 'translate-x-full'
                    }`}
                  />
                </div>
                <Field type="checkbox" name="billing" className="hidden" />
              </label>
              <p
                className={`card-title text-base transition ${
                  values.billing ? 'text-Marine-Blue' : 'text-Cool-Gray'
                }`}>
                Yearly
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="text-Cool-Gray transition border-none hover:text-Marine-Blue">
              Go Back
            </button>
            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-Marine-Blue self-end border-none transition-opacity hover:opacity-90">
              Next Step
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default SelectPlan;
