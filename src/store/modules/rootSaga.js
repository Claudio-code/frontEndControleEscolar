import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import student from './student/sagas';
import teacher from './teacher/sagas';
import topics from './topics/sagas';
import disipline from './disipline/sagas';
import course from './course/sagas';

export default function* rootSaga() {
  return yield all([
    auth,
    student,
    teacher,
    topics,
    disipline,
    course,
  ]);
}
