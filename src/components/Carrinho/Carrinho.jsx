import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'
import axios from 'axios'
import './carrinho.css'


export default function Carrinho() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
      axios.get
      ('https://63780b135c477765122b6f91.mockapi.io/CarrinhoPJT')
      .then((response) => {
        console.log(response.data)
        setAPIData(response.data);
      })
    }, []); 
    const setData = (data) =>{
        let { Name,Contato,Evento,Data,Pessoas,Bebidas} = 
        data;
        localStorage.setItem('Nome', Name);
        localStorage.setItem('Contato', Contato);
        localStorage.setItem('Evento', Evento);
        localStorage.setItem('Data',Data);
        localStorage.setItem('Pessoas',Pessoas );
        localStorage.setItem('Bebidas', Bebidas);
      }
      const onDelete = (id) => {
        if (window.confirm("Confirma Exclusão?")) {
          axios.delete
          (`https://63780b135c477765122b6f91.mockapi.io/CarrinhoPJT${id}`)
          .then(() => {
            getData()
          })
        }
    }
    const getData = () => {
        axios.get
        (`https://63780b135c477765122b6f91.mockapi.io/CarrinhoPJT`)
        .then((getData) => {
        setAPIData(getData.data);
        })
    }
    
    return (
        <div className='carrinho'>
            <Table singleLine>
        <Table.Header className='Table'>
          <Table.Row className='Row'>
            <Table.HeaderCell >Nome</Table.HeaderCell>
            <Table.HeaderCell >Contato</Table.HeaderCell>
            <Table.HeaderCell >Evento</Table.HeaderCell>
            <Table.HeaderCell >Data</Table.HeaderCell>
            <Table.HeaderCell >Pessoas</Table.HeaderCell>
            <Table.HeaderCell  >Bebidas</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
    
        <Table.Body>
        {APIData.map((data) => {
         return (
           <Table.Row>
              <Table.Cell className='Cell1'>{data.Name}</Table.Cell>
               <Table.Cell >{data.Contato}</Table.Cell>
               <Table.Cell className='Cell3'>{data.Evento}</Table.Cell>
               <Table.Cell className='Cell4'>{data.Data}</Table.Cell>
               <Table.Cell className='Cell5'>{data.Pessoas}</Table.Cell>
               <Table.Cell className='Cell6'>{data.Bebidas}</Table.Cell>
               <Table.Cell><Button className='Button' onClick={() => onDelete(data.id)}>Remover</Button></Table.Cell>
            </Table.Row>
       )})}
        </Table.Body>
        </Table>
    
        </div>
        )
    }