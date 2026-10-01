import LiveCodePresenter from '../LiveCodePresenter/LiveCodePresenter';

import { tableWrapper } from '../../assets/templateWrappers';
import { originalComponents } from '../../assets/myMailComponents.js';

const InputsLister = ({ inputs, handleCodeChange, handleCodeReset, handleAddCode }) => {

    const checkIfCodeIsOriginal = (inpt) => {
        const originalIndex = originalComponents.findIndex((i => (i.id === inpt.id)));

        const isOriginal = inpt.stringCode === originalComponents[originalIndex].stringCode;

        return isOriginal;
    }

    return (
        inputs.map((input) => {
            return (
                <LiveCodePresenter
                    code={input.stringCode}
                    wrapper={tableWrapper}
                    shouldSanitize={!checkIfCodeIsOriginal(input)}
                    handleCodeChange={ newCode => handleCodeChange(newCode, input.id) }
                    handleCodeReset={ () => handleCodeReset(input.id) }
                    handleAddCode={ () => handleAddCode(input.stringCode) }
                    key={input.id}
                />
            )
        })
    );
}

export default InputsLister;