import {addonsPickInterface} from '@/Types';
import {Field} from 'formik';
import {useState} from 'react';

function AddonsListItem({data}: addonsPickInterface) {
  const [checked, setChecked] = useState(false);

  const onHandleChange = (el: any) => {
    setChecked(el.target.checked);
  };

  return (
    <div
      className={`flex justify-between items-center w-full border ${
        checked && 'border-Purplish-Blue bg-Magnolia'
      } rounded-md p-4`}>
      <div className="flex items-center gap-5">
        <div
          className={`flex justify-center items-center border-2 rounded w-5 h-5 ${
            checked ? 'bg-Purplish-Blue border-Purplish-Blue' : 'bg-transparent'
          }`}>
          <div className="bg-Checkmark bg-no-repeat bg-cover bg-center w-3 h-2" />
        </div>
        <Field
          type="checkbox"
          name={data.text.split(' ').join('')}
          onClick={onHandleChange}
          className="hidden"
        />
        <div>
          <p className="main-title text-lg">{data.text}</p>
          <p className="text-Cool-Gray">{data.description}</p>
        </div>
      </div>
      <p className="text-Purplish-Blue text-sm text-lg">{data.price.month}</p>
    </div>
  );
}

export default AddonsListItem;
