function SidePanel() {
  return (
    <div className="bg-[url('./src/assets/images/bg-sidebar-desktop.svg')] bg-no-repeat bg-cover bg-center flex justify-center items-start w-1/4 h-full rounded-lg pt-6">
      <div className="flex  flex-col justify-start items-start gap-4">
        <a className='link before:content-["1"] '>
          <p className="text-Cool-Gray">Step 1</p>
          <p>Your Info</p>
        </a>
        <a className='link before:content-["2"]'>
          <p className="text-Cool-Gray">Step 2</p>
          <p>Select Plan</p>
        </a>
        <a className='link before:content-["3"]'>
          <p className="text-Cool-Gray">Step 3</p>
          <p>Add-ons</p>
        </a>
        <a className='link before:content-["4"]'>
          <p className="text-Cool-Gray">Step 4</p>
          <p>Summary</p>
        </a>
      </div>
    </div>
  );
}

export default SidePanel;
