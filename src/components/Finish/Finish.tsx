import {useEffect, useState} from 'react';
import {useData} from '@/Provider';
import {MainRoutes} from '@/environment/variables';
import {Link} from 'react-router-dom';
import FinishAddonItem from '@components/FinishAddonItem/FinishAddonItem';
import {cards} from '@/constants/constants';

function Finish() {
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
    <div className="flex flex-col justify-between grow mobile:mt-4">
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
          <p className="card-title text-Purplish-Blue text-xl text-center mobile:text-lg">
            {!state.plan?.billing && '+'}${state.summary.price + billing}
          </p>
        </div>
      </div>
      <div className="flex justify-between mobile:fixed mobile:flex mobile:items-center mobile:w-full mobile:bg-white mobile:right-0 mobile:bottom-0 mobile:p-4">
        <Link
          to={MainRoutes.addons}
          className="text-Cool-Gray transition border-none hover:text-Marine-Blue flex items-center">
          Go Back
        </Link>
        <Link
          to={MainRoutes.thank}
          className="bg-Purplish-Blue self-end  px-5 py-2 text-white border-none rounded-md transition-opacity hover:text-white hover:opacity-70 mobile:rounded">
          Confirm
        </Link>
      </div>
    </div>
  );
}

export default Finish;
