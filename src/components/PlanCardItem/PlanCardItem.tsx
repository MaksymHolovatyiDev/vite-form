import {SelectedCardItemType} from '@/Types';

function PlanCardItem({card, price, selected, billing}: SelectedCardItemType) {
  return (
    <div
      className={`${
        selected && 'border-Purplish-Blue bg-Magnolia'
      } border-2 rounded-md p-4 w-40 cursor-pointer transition hover:border-Purplish-Blue`}>
      <div
        className={`${card} bg-no-repeat bg-contain bg-center h-12 w-12 mb-8`}
      />
      <p className="card-title">{card.split('bg-')[1]}</p>
      <p className="text-Cool-Gray mb-1">
        ${price}/{billing ? 'yr' : 'mo'}
      </p>
      {billing && <p className="text-Marine-Blue">2 month free</p>}
    </div>
  );
}

export default PlanCardItem;
