import {useData} from '@/Providers/DataPrvider';
import {MainRoutes} from '@/environment/MainRoutes';
import {Field, Form, Formik} from 'formik';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import PersonalInfoLabel from '../PersonalInfoLable/PersonalInfoLabe';
import MainBtns from '../MainBtns/MainBtns';

function PersonalInfo() {
  const [required, setRequired] = useState<string[]>([]);
  const navigate = useNavigate();
  const {state, dispatch} = useData();

  const onHandleChange = (
    el: any,
    callback: (data: any) => void,
    field: string,
  ) => {
    callback(el);
    setRequired(prevState => prevState.filter(data => data !== field));
  };

  return (
    <Formik
      initialValues={
        Object.keys(state.info).length === 0
          ? {name: '', email: '', tel: ''}
          : state.info
      }
      onSubmit={async (values, {setSubmitting}) => {
        let error = false;
        setRequired([]);
        for (const [key, value] of Object.entries(values)) {
          const valueData = value as string;
          if (!valueData.split(' ').join('')) {
            error = true;
            setRequired(prevState => [...prevState, key]);
          }
        }

        if (!error) {
          dispatch({type: 'info', payload: values});
          navigate(MainRoutes.Plan);
        }

        setSubmitting(false);
      }}>
      {({values, handleBlur, handleChange, handleSubmit, isSubmitting}) => (
        <Form
          onSubmit={handleSubmit}
          className="flex flex-col justify-between mt-5 grow">
          <div className="flex flex-col gap-1">
            <PersonalInfoLabel
              name={'name'}
              text={'Name'}
              required={required}
            />
            <Field
              type="text"
              name="name"
              id="name"
              onChange={(el: any) => onHandleChange(el, handleChange, 'name')}
              onBlur={handleBlur}
              value={values.name}
              placeholder="e.g. Stephen King"
              className={`main-input mb-1 text-Marine-Blue ${
                required.includes('name') && 'border-Strawberry-Red'
              }`}
            />
            <PersonalInfoLabel
              name={'email'}
              text={'Email Address'}
              required={required}
            />
            <Field
              type="email"
              name="email"
              id="email"
              onChange={(el: any) => onHandleChange(el, handleChange, 'email')}
              onBlur={handleBlur}
              value={values.email}
              placeholder="e.g. stephenking@lorem.com"
              className={`main-input mb-1 text-Marine-Blue ${
                required.includes('email') && 'border-Strawberry-Red'
              }`}
            />
            <PersonalInfoLabel
              name={'tel'}
              text={'Phone Number'}
              required={required}
            />
            <Field
              type="text"
              name="tel"
              id="tel"
              pattern="[+0-9]{11}"
              onChange={(el: any) => onHandleChange(el, handleChange, 'tel')}
              onBlur={handleBlur}
              value={values.tel}
              placeholder="e.g. +1 234 567 890"
              className={`main-input text-Marine-Blue ${
                required.includes('tel') && 'border-Strawberry-Red'
              }`}
            />
          </div>
          <MainBtns isSubmitting={isSubmitting} end/>
        </Form>
      )}
    </Formik>
  );
}

export default PersonalInfo;
