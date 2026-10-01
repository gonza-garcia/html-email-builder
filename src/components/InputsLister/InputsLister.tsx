import LiveCodePresenter from '../LiveCodePresenter/LiveCodePresenter';

import { tableWrapper } from '../../assets/templateWrappers';
import { originalComponents } from '../../assets/myMailComponents';

import type { MailComponent } from '../../types';

type InputsListerProps = {
    inputs: MailComponent[];
    handleCodeChange: (newCode: string, id: string) => void;
    handleCodeReset: (id: string) => void;
    handleAddCode: (code: string) => void;
};

const InputsLister = ({ inputs, handleCodeChange, handleCodeReset, handleAddCode }: InputsListerProps) => {

    const checkIfCodeIsOriginal = (inpt: MailComponent) => {
        const originalIndex = originalComponents.findIndex((i => (i.id === inpt.id)));

        const isOriginal = inpt.stringCode === originalComponents[originalIndex].stringCode;

        return isOriginal;
    }

    return (
        <>
        {inputs.map((input) => {
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
        })}
        </>
    );
}

export default InputsLister;
