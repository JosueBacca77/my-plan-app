import { PlanInterface } from "../../interfaces/plan/Plan.interface";

export const getAllPlanExerciseDays=(plan: PlanInterface): number[]=> {
    const days: number[] = [];
  
    plan.muscularGroups.forEach((muscularGroup) => {
      muscularGroup.exercises.forEach((exercise) => {
        exercise.days.forEach((day) => {
          if (!days.includes(day)) {
            days.push(day);
          }
        });
      });
    });
  
    return days;
  }
  