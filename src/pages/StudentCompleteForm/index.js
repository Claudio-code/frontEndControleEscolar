import React, { useState } from 'react';

import { Container } from './styles';
import {
  HorizontalSeparator,
  VerticalSeparator,
  ButtonSucess,
  ButtonGoBack,
} from '../../styles/global';

import FormStudent from '../../components/FormStudent';
import AddressForm from '../../components/AddressForm';
import FormResponsible from '../../components/FormResponsible';

function StudentCompleteForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cnh, setCnh] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [ethnicity, setEthnicity] = useState('');

  const [nameResponsible, setNameResponsible] = useState('');
  const [emailResponsible, setEmailResponsible] = useState('');
  const [kinshipResponsible, setKinshipResponsible] = useState('');
  const [cpfResponsible, setCpfResponsible] = useState('');
  const [rgResponsible, setRgResponsible] = useState('');

  return (
    <Container>
      <form>
        <FormStudent
          title="Cadastro Completo de Aluno"
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          cnh={cnh}
          setCnh={setCnh}
          cpf={cpf}
          setCpf={setCpf}
          rg={rg}
          setRg={setRg}
          age={age}
          setAge={setAge}
          ethnicity={ethnicity}
          setEthnicity={setEthnicity}
          sex={sex}
          setSex={setSex}
        />
        <HorizontalSeparator />
        <div id="ContainerRow">
          <FormResponsible
            cpf={cpfResponsible}
            setCpf={setCpfResponsible}
            email={emailResponsible}
            setEmail={setEmailResponsible}
            name={nameResponsible}
            setName={setNameResponsible}
            kinship={kinshipResponsible}
            setKinship={setKinshipResponsible}
            rg={rgResponsible}
            setRg={setRgResponsible}
          />
          <VerticalSeparator />
          <AddressForm />
        </div>
        <ButtonGoBack>
          Voltar
        </ButtonGoBack>
        <ButtonSucess>
          Cadastrar
        </ButtonSucess>
      </form>
    </Container>
  );
}

export default StudentCompleteForm;