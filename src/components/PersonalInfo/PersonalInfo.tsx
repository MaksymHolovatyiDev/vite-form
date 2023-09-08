import {useData} from '@/Provider';
import {MainRoutes} from '@/environment/variables';
import {Field, Form, Formik} from 'formik';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

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
          navigate(MainRoutes.plan);
        }

        setSubmitting(false);
      }}>
      {({values, handleBlur, handleChange, handleSubmit, isSubmitting}) => (
        <Form
          onSubmit={handleSubmit}
          className="flex flex-col justify-between mt-5 grow">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <label htmlFor="name" className="text-Marine-Blue">
                Name
              </label>
              <p
                className={
                  required.includes('name') ? 'text-Strawberry-Red' : 'hidden'
                }>
                This field is required
              </p>
            </div>
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

            <div className="flex justify-between items-center">
              <label htmlFor="email" className="text-Marine-Blue">
                Email Address
              </label>
              <p
                className={
                  required.includes('name') ? 'text-Strawberry-Red' : 'hidden'
                }>
                This field is required
              </p>
            </div>

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

            <div className="flex justify-between items-center">
              <label htmlFor="password" className="text-Marine-Blue">
                Phone Number
              </label>
              <p
                className={
                  required.includes('name') ? 'text-Strawberry-Red' : 'hidden'
                }>
                This field is required
              </p>
            </div>
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
          <div className="self-end mobile:fixed mobile:flex mobile:items-center mobile:justify-end mobile:w-full mobile:bg-white mobile:right-0 mobile:bottom-0 mobile:p-4">
            <button
              type="submit"
              className="bg-Marine-Blue border-none transition-opacity hover:opacity-90 mobile:rounded"
              disabled={isSubmitting}>
              Next Step
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default PersonalInfo;
