import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react/'
import axios from 'axios'
import './formulario.css'

export default function Cardapio() {
    const [Name, setName] = useState('')
    const [Contato, setContato] = useState('')
    const [Evento, setEvent] = useState('')
    const [Data, setData] = useState('')
    const [Pessoas, setPessoas] = useState('')
    const [Bebidas, setBebidas] = useState('')
  const postData = () => {
    axios.post('https://63780b135c477765122b6f91.mockapi.io/CarrinhoPJT',{Name,Contato,Evento,Data,Pessoas,Bebidas}
    )

  }


return (
  <div>
<Form unstackable className="FonteForm">
<Form.Group widths={2}>
        <Form.Field>
        <label>Informe seu Nome completo: </label>
        <input placeholder='Nome Completo' onChange={(e) => setName (e.target.value)} />
      </Form.Field>
      <br />
      <Form.Field>
        <label>Informe Numero para contato: </label>
        <input placeholder='Ex:(21)99999-9999' onChange={(e) => setContato (e.target.value)} />
      </Form.Field>
      <br />
      <Form.Field>
        <label>Informe o Tipo de Evento: </label>
        <input placeholder='Casamento, Formatura, Debutante' onChange={(e) => setEvent (e.target.value)} />
      </Form.Field>
      <br />
      <Form.Field>
        <label>Informe a Data do Evento: </label>
        <input placeholder='Ex:12/12/2012' onChange={(e) => setData (e.target.value)} />
      </Form.Field>
      <br />
      <Form.Field>
        <label>Informe o numero de pessoas: </label>
        <input placeholder='50, 100, 200' onChange={(e) => setPessoas (e.target.value)} />
      </Form.Field>
      <br />
      <Form.Field>
        <label>Informe os tipos de bebida: </label>
        <input placeholder='Refrigerantes, Alcoolicos, Sucos..' onChange={(e) => setBebidas (e.target.value)} />
      </Form.Field>
</Form.Group>
<br />

<Button type='submit' onClick={postData}>Enviar</Button>

</Form>
</div>
)
}