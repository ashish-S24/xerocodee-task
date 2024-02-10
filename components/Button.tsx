
type ButtonProps = {
    type:"button",
    title: string,
    varient:"btn_blue" | "btn_green" | "bg_gradient"
    padding_varient :"padding-small" | "padding-large"
}

const Button = ({type , title , varient, padding_varient} : ButtonProps) => {
  return (
    <button className={`flexCenter rounded-full ${varient} ${padding_varient}`} type={type}>
        <label className="whitespace-nowrap font-normal lg:text-base text-[13.65px]">{title}</label>
    </button>
  )
}

export default Button