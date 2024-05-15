import "./button.css";

const Button = ({symbol , color , handleClick , fontColor}) => {
    return(
        <div onClick={() => handleClick(symbol)} 
        className = "button-wrapper" style = {{backgroundColor: color , color: fontColor}} >{symbol}
        </div>
    )
}

export default Button;