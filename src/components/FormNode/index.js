import React, { useState } from 'react';
import { useFormik } from 'formik';

import Alert from '../Alert';
import Button from '../Button';
import FormInput from '../FormInput';
import FormLabel from '../FormLabel';
import FormError from '../FormError';
import Loading from '../Loading';
import { createNode } from '../../services/adminapi'
import { validate } from './validator';

import * as S from './styled';

function FormNode({ onCancelClick, afterRequestSuccess }) {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      friends: '',
    },
    validateOnChange: false,
    validateOnBlur: false,
    validate,
    onSubmit: async values => {
      setLoading(true);

      createNode(values.name, values.friends)
        .then(res => {
          setLoading(false);

          if (res.status === 200) {
            afterRequestSuccess();
          } else {
            setError(`Ocorreu um erro: ${res.data.message}`);
          }
        })
        .catch(err => {
          setLoading(false);
          setError(`O servidor não respondeu de forma bem sucedida.`);
        });
    },
  });
  const { touched, errors, getFieldProps } = formik;

  return (
    <>
      {error && <Alert text={error} variant="error" />}
      <S.Form onSubmit={formik.handleSubmit}>
        <S.FormItem>
          <FormLabel label="Nome" htmlFor="name" />
          <FormInput id="name" placeholder="Ex.: Carlos" {...getFieldProps('name')} />
          {errors.name && touched.name ? <FormError error={errors.name} /> : null}
        </S.FormItem>

        <S.FormItem>
          <FormLabel label="Amigos (CSV)" htmlFor="friends" />
          <FormInput id="friends" placeholder="Ex.: Ana,Maria,Joao" {...getFieldProps('friends')} />
          <S.Span>Deixe em branco caso não existam amigos.</S.Span>
          {errors.friends && touched.friends ? <FormError error={errors.friends} /> : null}
        </S.FormItem>

        <S.FormItem className='actionRow'>
          {loading && (
            <S.LoadingWrapper>
              <Loading style={{ width: '30%' }} />{' '}
            </S.LoadingWrapper>
          )}
          {!loading && (
            <>
              <Button type="submit" variant="success" text='Adicionar' disabled={loading} />
              <Button type="button" onClick={onCancelClick} text="Cancelar" />
            </>
          )}
        </S.FormItem>
      </S.Form>
    </>
  );
}

export default FormNode;
