const Button=({type, children,...buttonprops}) =>   {
    const className = type === 'primary'? "PrimaryButton" : "SecondaryButton";
    return (
        <button className={`Button${className}`} {...buttonprops}>
            {children}
        </button>
    );
};

const LoginButton=()