import {useEffect} from 'react';
import {useData} from '@/Providers/DataProvider';
import {addonsPick} from '@/constants/constants';
import {FinishAddonsItemsInterface} from '@/Types';

function FinishAddonItem({data, setTotalPrice}: FinishAddonsItemsInterface) {
  const {state} = useData();
  const price = addonsPick.find(el => el.text === data)?.price;

  useEffect(() => {
    if (price)
      setTotalPrice((prevState: number) =>
        state.plan?.billing
          ? prevState + +price.year
          : prevState + +price.month,
      );
  }, []);

  return (
    <div className="flex justify-between">
      <p className="text-Cool-Gray">{data}</p>
      <p className="text-Marine-Blue">
        +${state.plan?.billing ? price?.year + '/yr' : price?.month + '/mo'}
      </p>
    </div>
  );
}

export default FinishAddonItem;
