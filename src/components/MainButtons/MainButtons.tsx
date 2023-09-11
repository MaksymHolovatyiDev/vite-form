import {SelectButton} from '@/Types';
import {Link} from 'react-router-dom';

function MainButtons({
  isSubmitting,
  routeForward,
  routeBackward,
  end = false,
}: SelectButton) {
  return (
    <div
      className={`flex items-center ${
        end ? 'justify-end' : 'justify-between'
      } mobile:absolute mobile:flex mobile:items-center mobile:w-full mobile:bg-white mobile:right-0 mobile:bottom-0 mobile:p-4`}>
      {routeBackward && (
        <Link
          to={routeBackward}
          className="text-Cool-Gray transition border-none hover:text-Marine-Blue flex items-center">
          Go Back
        </Link>
      )}
      {routeForward ? (
        <Link
          to={routeForward}
          className="bg-Purplish-Blue self-end  px-5 py-2 text-white border-none rounded-md transition-opacity hover:text-white hover:opacity-70 mobile:rounded">
          Confirm
        </Link>
      ) : (
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-Marine-Blue self-end border-none transition-opacity hover:opacity-90 mobile:rounded">
          Next Step
        </button>
      )}
    </div>
  );
}

export default MainButtons;
