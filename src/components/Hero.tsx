export default function Hero() {
  return (
    <section className="mt-[77px] flex flex-col items-center justify-center text-center">
      <h1 className="text-[64px] font-black">
        Manage All Your Social Media Profiles From One Place.
      </h1>
      <div className="flex justify-between max-w-[794px] w-full mt-[39px]">
        <div className="flex gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="19"
            viewBox="0 0 25 19"
            fill="none"
          >
            <path
              d="M2 9.23077L8.84444 16L23 2"
              stroke="#1465FA"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
          Free 15-day trial
        </div>
        <div className="flex gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="19"
            viewBox="0 0 25 19"
            fill="none"
          >
            <path
              d="M2 9.23077L8.84444 16L23 2"
              stroke="#1465FA"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
          Unlimited Team Members
        </div>
        <div className="flex gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="19"
            viewBox="0 0 25 19"
            fill="none"
          >
            <path
              d="M2 9.23077L8.84444 16L23 2"
              stroke="#1465FA"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
          Cancel Anytime
        </div>
      </div>
    </section>
  );
}
