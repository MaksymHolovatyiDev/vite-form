import {SelectedCardItem} from '@/Types';
import {Field} from 'formik';

function PlanCardItem({card, selected, billing}: SelectedCardItem) {
  return (
    <label>
      <Field
        type="radio"
        name="plan"
        value={card.text.split('bg-')[1]}
        className="hidden"
      />
      <div
        className={`${
          selected && 'border-Purplish-Blue bg-Magnolia'
        } border-2 rounded-md p-4 w-40 cursor-pointer transition hover:border-Purplish-Blue mobile:flex mobile:gap-4 mobile:w-full mobile:p-4`}>
        <div
          className={`${card.text} bg-no-repeat bg-contain bg-center h-12 w-12 mb-8 mobile:m-0`}
        />
        <div>
          <p className="card-title">{card.text.split('bg-')[1]}</p>
          <p className="text-Cool-Gray mb-1">
            ${billing ? card.price.year + '/yr' : card.price.month + '/mo'}
          </p>
          {billing && <p className="text-Marine-Blue">2 month free</p>}
        </div>
      </div>
    </label>
  );
}

export default PlanCardItem;
