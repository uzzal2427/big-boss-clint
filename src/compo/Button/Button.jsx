

const Button = ({buttonInfo}) => {
    return (
        <div className="flex justify-center">
            <button className="uppercase btn btn-outline border-0 border-b-4 my-5">{buttonInfo}</button>
        </div>
    );
};

export default Button;