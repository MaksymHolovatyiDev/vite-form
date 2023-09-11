import {cards} from '@/constants/constants';
import {Form, Formik} from 'formik';
import PlanCardItem from '@components/PlanCardItem/PlanCardItem';
import {useNavigate} from 'react-router-dom';
import {useData} from '@/Providers/DataProvider';
import {MainRoutes} from '@/environment/MainRoutes';
import SelectPlanCheckbox from '../SelectPlanCheckbox/SelectPlanCheckbox';
import MainButtons from '@components/MainButtons/MainButtons';
import {useDefaultRedirect} from '@/Hooks';

function SelectPlan() {
  const navigate = useNavigate();
  const {state, dispatch} = useData();

  useDefaultRedirect();

  return (
    <Formik
      initialValues={
        Object.keys(state.plan).length === 0
          ? {
              plan: cards[0].text.split('bg-')[1],
              billing: false,
            }
          : state.plan
      }
      onSubmit={async (values, {setSubmitting}) => {
        dispatch({type: 'plan', payload: values});
        navigate(MainRoutes.Addons);
        setSubmitting(false);
      }}>
      {({values, isSubmitting}) => (
        <Form className="flex flex-col justify-between grow">
          <div
            id="my-radio-group"
            role="group"
            aria-labelledby="my-radio-group">
            <ul className="flex justify-between mobile:flex-col mobile:gap-4">
              {cards.map(el => (
                <li key={el.text}>
                  <PlanCardItem
                    card={el}
                    selected={values.plan === el.text.split('bg-')[1]}
                    billing={values.billing}
                  />
                </li>
              ))}
            </ul>
            <SelectPlanCheckbox billing={values.billing} />
          </div>
          <MainButtons
            isSubmitting={isSubmitting}
            routeBackward={MainRoutes.Default}
          />
        </Form>
      )}
    </Formik>
  );
}

export default SelectPlan;
