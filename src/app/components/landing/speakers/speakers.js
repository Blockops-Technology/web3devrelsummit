import speakers from "./speakers.json";

const Speakers = () => {
  return (
    <div className="max-w-7xl mx-auto my-50 z-10 pb-[100px]">
      <h1 className={`uppercase font-bold dela-font text-lg lg:text-2xl mt-10`}>Speakers</h1>

      <div className="sm:flex items-center justify-between mt-2 mb-10">
        <p className={`mb-3 sm:mb-0`}><b>Have something to say?</b> Speaker applications are open</p>
        <a href="https://forms.gle/DQWw8XviBzNDCWag9" target="_blank" rel="noreferrer noopener">
          <div className="bg-black p-3 text-white text-sm min-w-[150px] text-center">
            Apply as a speaker
          </div>
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-7">
        {
          speakers.list.map((speaker) => (
            <div key={speaker.name}>
              <img className="border border-pink-200" src={`/speakers/${speaker.photo}`} alt={speaker.name} />
              <div className="mt-3 p-5 bg-gray-100 border border-pink-200">
                <h2 className="text-sm sm:text-lg font-bold">{speaker.name}</h2>
                <p className="text-xs sm:text-base text-gray-500">{speaker.company}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Speakers;