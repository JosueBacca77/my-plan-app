import { create } from 'zustand';
import { StudentInterface } from '../../../interfaces/Student.interface';

type StudentsStore = {
  students: StudentInterface[];
  student: StudentInterface | null;
  setStudents: (students: StudentInterface[]) => void;
  fetchStudents: () => Promise<void>;
};

const useStudentsStore = create<StudentsStore>((set) => ({
  students: [],
  student: null,
  fetchStudents: async () => {
    // Fetch chats from the API and update the state
  },
  setStudents: (students: StudentInterface[]) => set((state) => ({ ...state, students: students })),
}));

export default useStudentsStore;