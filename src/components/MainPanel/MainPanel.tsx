import SidePanel from '../SidePanel/SidePanel';

function MainPanel({children}: {children: React.ReactNode}) {
  return (
    <div className="bg-white flex p-2 h-full max-height w-3/5 absolute top-1/2 left-1/2 translate-center rounded-lg">
      <SidePanel />
      {children}
    </div>
  );
}

export default MainPanel;
