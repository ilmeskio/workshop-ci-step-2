import { FormEventHandler } from "react";
import { useSearchParams } from "next/navigation";

import Modal from "./Modal";
import { setPriority } from "os";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  value: string;
  setValue: (value: string) => boolean | void;
  priority?: number;
  setPriority?: (priority: number) => boolean | void;
  variant?: 'add' | 'edit';
}

const UpsertTaskModal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, value, setValue, handleSubmit, variant = 'add', setPriority = () => { }, priority = 2 }) => {
  const searchParams = useSearchParams();
  const showPriority = searchParams.get('show_priority') === '1';

  return (
    <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <form onSubmit={handleSubmit}>
        <h3 className='font-bold text-lg'>{variant === 'add' ? 'Add new task' : 'Edit task'}</h3>
        <div className='modal-action'>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full'
            data-testid={`todo-text-${variant}`}
          />
          {showPriority &&
            <select
              onChange={(e) => setPriority(parseInt(e.target.value))}
              value={priority}
            >
              <option value="1">
                Low
              </option>
              <option value="2">
                Medium
              </option>
              <option value="3">
                High
              </option>
            </select>}
          <button type='submit' className='btn' data-testid={`save-${variant}-todo`}>
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default UpsertTaskModal;
