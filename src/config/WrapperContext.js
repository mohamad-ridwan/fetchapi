const { InputData, default: InputDataProvider } = require("./InputData")

const WrapperContext = ({ children }) => {
    return (
        <InputDataProvider>
            {children}
        </InputDataProvider>
    )
}

export default WrapperContext