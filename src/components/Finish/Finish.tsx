import {useEffect, useState} from 'react';
import {useData} from '@/Provider';
import {MainRoutes} from '@/environment/variables';
import {Link} from 'react-router-dom';
import FinishAddonItem from '@components/FinishAddonItem/FinishAddonItem';
import {FinishType} from '@/Types';
import {cards} from '@/constants/constants';

function Finish({setThank}: FinishType) {
  const {state, dispatch} = useData();
  const price = cards.find(el => el.text.split('bg-')[1] === state.plan.plan);
  const [totalPrice, setTotalPrice] = useState(
    state.plan?.billing ? price!.price.year : price!.price.month,
  );

  const billing = state.plan?.billing ? '/yr' : '/mo';

  const addons = Object.entries(state.addons).reduce(
    (acc: string[], el) => (el[1] ? [...acc, el[0]] : acc),
    [],
  );

  useEffect(() => {
    dispatch({type: 'setPrice', payload: totalPrice});
  }, [totalPrice]);

  return (
    <div className="flex flex-col justify-between grow">
      <div>
        <div className="bg-Magnolia rounded-md p-6">
          <div className="flex justify-between">
            <p className="card-title">
              {`${state.plan.plan}(${
                state.plan?.billing ? 'Yearly' : 'Monthly'
              })`}
            </p>
            <p className="card-title">
              $
              {`${
                state.plan.billing ? price?.price.year : price?.price.month
              }${billing}`}
            </p>
          </div>
          <Link
            to={MainRoutes.plan}
            className="text-Cool-Gray underline transition hover:text-Purplish-Blue focus:text-Purplish-Blue">
            Change
          </Link>
          {addons.length !== 0 && (
            <>
              <div className="bg-Light-Gray w-full h-px my-5" />
              <ul className="flex flex-col gap-2">
                {addons.map(el => (
                  <li key={el + price}>
                    <FinishAddonItem data={el} setTotalPrice={setTotalPrice} />
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="flex justify-between items-center mt-6 mx-4">
          <p className="text-Cool-Gray">
            Total(per {state.plan?.billing ? 'year' : 'month'})
          </p>
          <p className="card-title text-Purplish-Blue text-xl text-center">
            {!state.plan?.billing && '+'}${state.summary.price + billing}
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <Link
          to={MainRoutes.addons}
          className="text-Cool-Gray transition border-none hover:text-Marine-Blue">
          Go Back
        </Link>
        <button
          type="button"
          onClick={() => setThank(true)}
          className="bg-Purplish-Blue self-end border-none transition-opacity hover:opacity-70">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Finish;
