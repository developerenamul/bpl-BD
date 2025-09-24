const Banner = ({ bannerBg, bannerLogo }) => {
  return (
    <div
      className="md:w-11/12 mx-auto p-12  rounded-2xl"
      style={{
        backgroundImage: `url(${bannerBg}) `,
      }}
    >
      <div className="banner-content space-y-3 flex flex-col items-center ">
        <img src={bannerLogo} className="block text-center" />
        <h2 className="text-2xl font-bold">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>
        <h4 className="text-gray-300">Beyond Boundaries Beyond Limits</h4>
        <button className="btn font-bold bg-lime-300 text-black outline outline-2 outline-lime-300 outline-offset-4 border-0 hover:bg-lime-600">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
