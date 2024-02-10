import Image from "next/image"

type ReviewCardProps = {
    icon: string,
    head:string,
    review:string,
    name:string,
    title:string
}


const ReviewCard = ({icon , head, review, name, title}: ReviewCardProps ) => {
    return (
        <div className="bg-white lg:h-[527px] h-[346.66px] w-[265px] lg:w-[397px] flex flex-col justify-between p-[22.79px] lg:p-[34.65px] lg:pb-[34.65px] lg:pr-[28px]  lg:gap-[25px] rounded-[21.66px] border-[0.72px] shadow-[rgba(_13,_10,_44,_0.06)_0px_2.88px_8.66px_0px]">
            <div>⭐ ⭐️ ⭐️ ⭐️ ⭐️️</div>
            <div className="flex flex-col gap-2">
                <h1 className="title font-bold text-[15.79px] lg:text-2xl font-dm-sans">
                    {head}
                </h1>
                <p className="text-[11.4px] lg:text-[17.32px] font-light  font-dm-sans text-[#6E6C83]">
                    {review}
                </p>
            </div>
            <div className="w-full border-[1.08px] border-[#DEDEE9]"></div>
            <div className="flex gap-[8.55px] lg:gap-[18px]">
                <div className="flex items-center"><img className="lg:w-[32px] lg:h-[32px] w-[21px] h-[21px]" src={icon}/></div>
                <div className="flex flex-col gap-[7px] lg:gap-[10px]">
                    <h1 className="tex-[13.29px] lg:text-xl text-[#1E1B39] font-dm-sans">{name}</h1>
                    <h2 className="text-[8.55px] lg:text-[14.44px] text-[#6E6C83] font-dm-sans">{title}</h2>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard