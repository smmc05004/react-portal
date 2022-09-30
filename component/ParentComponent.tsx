import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <div>
      parent
      <ChildComponent />
    </div>
  );
};

export default ParentComponent;
