function Thank() {
  return (
    <div className="flex flex-col grow justify-center items-center gap-5 mobile:py-12">
      <div className="thank-you-bg  bg-no-repeat bg-contain bg-center h-20 w-20 mb-3 mobile:h-14 mobile:w-14" />
      <p className="main-title">Thank you!</p>
      <p className="text-Cool-Gray max-w-md text-center">
        Thanks for your subscription! We hope you have fun using our platform.
        If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default Thank;
