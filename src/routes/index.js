import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './route';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Alunos from '../pages/Alunos';
import Professores from '../pages/Professores';
import Disiplinas from '../pages/Disiplinas';
import Cursos from '../pages/Cursos';
import Turmas from '../pages/Turmas';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/Alunos" component={Alunos} isPrivate />
      <Route path="/Professores" component={Professores} isPrivate />
      <Route path="/Disiplinas" component={Disiplinas} isPrivate />
      <Route path="/Cursos" component={Cursos} isPrivate />
      <Route path="/Turmas" component={Turmas} isPrivate />
    </Switch>
  );
}
