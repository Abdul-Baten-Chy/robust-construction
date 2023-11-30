const NewArrival = () => {
  return (
    <div className="mx-auto">
      <h1 className="text-4xl my-10 font-bold">New Arrival</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div className="card  w-[263px] h-[300px] bg-base-100 shadow-xl flex flex-col justify-between ">
          <figure>
            <img
              src="https://i.ibb.co/gr5gVgY/banner-2.jpg"
              alt="Shoes"
              className="h-[150px] object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold">Landscaping Services</h2>
            <p>Powerful Sound In A Compact Package Portable Bluetooth</p>
          </div>
        </div>
        <div className="card  w-[263px] h-[300px] bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/cgNdGfs/card-6.jpg"
              alt="Shoes"
              className="h-[150px] object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold">Structural Engineering</h2>
            <p>Powerful Sound In A Compact Package Portable Bluetooth</p>
          </div>
        </div>
        <div className="card  w-[263px] h-[300px] bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/SwHNSw9/card-4.jpg"
              alt="Shoes"
              className="h-[150px] object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold">Interior Design</h2>
            <p>Powerful Sound In A Compact Package Portable Bluetooth</p>
          </div>
        </div>
        <div className="card  w-[263px] h-[300px] bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/F8wtcGY/card-5.jpg"
              alt="Shoes"
              className="h-[150px] object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold">Green Building Solutions</h2>
            <p>Powerful Sound In A Compact Package Portable Bluetooth</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;



