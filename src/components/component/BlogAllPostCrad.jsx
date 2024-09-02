import { BadgesNegative } from "../buttons";

export const BlogAllPostCard = () => {
  return (
    <div className="max-w-[392px] border border-solid border-[#E8E8EA] rounded-xl p-4 flex flex-col gap-4">
      <div
        className="h-[240px] max-w-[360px] rounded-md bg-cover bg-center"
        style={{
          backgroundImage: `url(./blogPostImg.jpeg)`,
        }}
      ></div>
      <div className="flex flex-col gap-5 p-2">
        <div className="flex flex-col gap-4">
          <BadgesNegative text={"Design"} />
          <p className="font-workSans font-semibold not-italic text-2xl text-[#181A2A] leading-7 flex flex-wrap">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </p>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex gap-3 items-center">
            <div className="w-9 h-9 rounded-[50%] border border-solid border-black">
              d
            </div>
            <p className="font-workSans font-medium not-italic text-base text-[#97989F]">
              Jason Francisco
            </p>
          </div>
          <p className="font-workSans font-normal not-italic text-base text-[#97989F]">
            August 20, 2022
          </p>
        </div>
      </div>
    </div>
  );
};
