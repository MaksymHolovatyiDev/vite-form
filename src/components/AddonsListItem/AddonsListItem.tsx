import {AddonsPickInterface} from '@/Types';
import {Field} from 'formik';
import {useState} from 'react';

function AddonsListItem({data, billing, value}: AddonsPickInterface) {
  const [checked, setChecked] = useState(value);

  const onHandleChange = (el: any) => {
    setChecked(el.target.checked);
  };

  return (
    <div
      className={`flex justify-between items-center w-full border ${
        checked && 'border-Purplish-Blue bg-Magnolia'
      } rounded-md p-4 transition hover:border-Purplish-Blue cursor-pointer mobile:py-2`}>
      <div className="flex items-center gap-5">
        <div
          className={`flex justify-center items-center border-2 rounded w-5 h-5 mobile:w-6 mobile:h-6 ${
            checked ? 'bg-Purplish-Blue border-Purplish-Blue' : 'bg-transparent'
          }`}>
          <div
            className={
              checked
                ? 'bg-Checkmark bg-no-repeat bg-cover bg-center w-3 h-2 mobile:w-4 mobile:h-3'
                : ''
            }
          />
        </div>
        <Field
          type="checkbox"
          name={data.text}
          onClick={onHandleChange}
          className="hidden"
        />
        <div>
          <p className="main-title text-lg">{data.text}</p>
          <p className="text-Cool-Gray text-sm">{data.description}</p>
        </div>
      </div>
      <p className="text-Purplish-Blue text-sm">
        $+{billing ? data.price.year + '/yr' : data.price.month + '/mo'}
      </p>
    </div>
  );
}

export default AddonsListItem;
