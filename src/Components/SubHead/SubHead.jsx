/* eslint-disable react/prop-types */
const SubHead = ({ title }) => {
  return (
    <div>
      <div className="flex flex-col items-center my-16">
        <h2 className="text-5xl font-sans">{title}</h2>
        <img
          src="https://i.ibb.co/XJqjYLB/line-small.png"
          alt=""
          className="w-[300px] my-8"
        />
      </div>
    </div>
  );
};

export default SubHead;
