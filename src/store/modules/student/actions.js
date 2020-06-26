export function completeStudentRegistrationAction(Student) {
  return {
    type: '@student/COMPLETE_STUDENT_REGISTRATION',
    payload: { Student },
  };
}

export function StudentRegistrationAndAnddressAction(Student) {
  return {
    type: '@student/STUDENT_REGISTRATION_AND_ANDDRESS',
    payload: { Student },
  };
}

export function StudentRegistrationAndResponsibleAction(Student) {
  return {
    type: '@student/STUDENT_REGISTRATION_AND_RESPONSIBLE',
    payload: { Student },
  };
}

export function StudentRegistrationAction(Student) {
  return {
    type: '@student/STUDENT_REGISTRATION',
    payload: { Student },
  };
}
