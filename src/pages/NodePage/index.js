import React, { useState, useEffect } from 'react';

import BasePage from '../../components/BasePage';
import Button from '../../components/Button';
import FormNode from '../../components/FormNode';
import Loading from '../../components/Loading';
import { listNodes } from '../../services/adminapi';

import * as S from './styled';

function NodePage() {

  const [nodes, setNodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setLoading(true);
    listNodes()
      .then(res => {
        setLoading(false);
        setNodes(res.data.data)
      }) 
      .catch(err => {
        setLoading(false);
        console.log(err)
      });
  }, [showForm])

  return (
    <BasePage>
      <S.ActionRow>
        <Button text="+" variant="success" onClick={() => setShowForm(true)} />
      </S.ActionRow>

      {showForm && 
        <FormNode onCancelClick={() => setShowForm(false)} afterRequestSuccess={() => setShowForm(false)} />
      }

      {!showForm && loading && <Loading width="10%" />}
      {!showForm && 
        <S.List>
          {nodes && nodes.map((name) => <S.ListItem key={name}>{name}</S.ListItem>)}
          {(!nodes || nodes.length === 0) && <S.ListItem className='empty'>Sem resultados.</S.ListItem>}
        </S.List>
      }
    </BasePage>
  );
}

export default NodePage;
