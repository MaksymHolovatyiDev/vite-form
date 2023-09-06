function Finish() {
  return (
    <div className="flex flex-col justify-between grow">
      <div>
        <p>Arcade</p>
        <a>Change</a>
        <p>Total()</p>
      </div>
      <div className="flex justify-between">
        <button type="button" className="text-Cool-Gray">
          Go Back
        </button>
        <button type="button">Submit</button>
      </div>
    </div>
  );
}

export default Finish;
