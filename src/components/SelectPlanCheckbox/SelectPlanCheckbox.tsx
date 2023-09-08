import { Field } from "formik";

function SelectPlanCheckbox({billing}:{billing:boolean}) {
    return (
      <div className="flex justify-center items-center mt-12 bg-Magnolia rounded h-12">
        <div className="flex items-center gap-4">
          <p
            className={`card-title text-base transition ${
              billing ? 'text-Cool-Gray' : 'text-Marine-Blue'
            }`}>
            Monthly
          </p>
          <label>
            <div className="bg-Marine-Blue px-1 h-6 w-12 rounded-full flex justify-start items-center cursor-pointer">
              <div
                className={`bg-white h-5 w-5 rounded-full transition-transform ${
                  billing && 'translate-x-full'
                }`}
              />
            </div>
            <Field type="checkbox" name="billing" className="hidden" />
          </label>
          <p
            className={`card-title text-base transition ${
              billing ? 'text-Marine-Blue' : 'text-Cool-Gray'
            }`}>
            Yearly
          </p>
        </div>
      </div>
    );
}

export default SelectPlanCheckbox;