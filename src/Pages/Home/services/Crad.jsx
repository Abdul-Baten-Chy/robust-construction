

const Crad = ({service}) => {

    const {serviceName, description, price, image, duration}=service
  return (
    <div className="card  glass">
      <figure className="h-[180px]">
        <img
          src={image}
          alt="car!"
          className="w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
        <p>{description}</p>
        <p>Charge: {price}</p>
        <p>Duration: {duration}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn now!</button>
        </div>
      </div>
    </div>
  );
};

export default Crad;
