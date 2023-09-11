import {PersonalInfoWrapper} from '@/Types';

function PersonalInfoLabel({name, text, required}: PersonalInfoWrapper) {
  return (
    <div className="flex justify-between items-center">
      <label htmlFor={name} className="text-Marine-Blue">
        {text}
      </label>
      <p className={required.includes(name) ? 'text-Strawberry-Red' : 'hidden'}>
        This field is required
      </p>
    </div>
  );
}

export default PersonalInfoLabel;
