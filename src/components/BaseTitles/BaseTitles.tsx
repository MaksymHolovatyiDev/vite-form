function BaseTitles({children}: {children: React.ReactNode}) {
  return (
    <div className="base-container">
      <p className="main-title mb-2">Select your plan</p>
      <p className="text-Cool-Gray mb-8">
        You have the option of monthly or yearly billing.
      </p>
      {children}
    </div>
  );
}

export default BaseTitles;
