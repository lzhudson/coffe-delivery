import { useFormContext } from 'react-hook-form'
import { FormGroup } from '../../../../components/FormGroup'
import { FormRow } from '../../../../components/FormRow'
import { Input, InputRoot } from '../../../../components/Input'
import { InputGroupText } from '../../../../components/InputGroupText'
import { AddressFieldContainer } from './style'
import { AddAddressFormValidationFormData } from '../..'
import { Feedback } from '../../../../components/Feedback'

export function AddressFields() {
  const {
    register,
    formState: { errors },
  } = useFormContext<AddAddressFormValidationFormData>()
  return (
    <AddressFieldContainer>
      <FormRow>
        <FormGroup>
          <InputRoot>
            <Input placeholder="CEP" {...register('address.zipcode')} />
          </InputRoot>
          {errors.address?.zipcode?.message && (
            <Feedback>{errors.address?.zipcode?.message}</Feedback>
          )}
        </FormGroup>
      </FormRow>
      <FormRow>
        <FormGroup>
          <InputRoot>
            <Input placeholder="Rua" {...register('address.street')} />
          </InputRoot>
          {errors.address?.street?.message && (
            <Feedback>{errors.address?.street?.message}</Feedback>
          )}
        </FormGroup>
      </FormRow>
      <FormRow>
        <FormGroup>
          <InputRoot>
            <Input placeholder="Número" {...register('address.number')} />
          </InputRoot>
          {errors.address?.number?.message && (
            <Feedback>{errors.address?.number?.message}</Feedback>
          )}
        </FormGroup>
        <FormGroup>
          <InputRoot>
            <Input
              placeholder="Complemento"
              {...register('address.complement')}
            />
            <InputGroupText>Opcional</InputGroupText>
          </InputRoot>
        </FormGroup>
      </FormRow>
      <FormRow>
        <FormGroup>
          <InputRoot>
            <Input placeholder="Bairro" {...register('address.neighborhood')} />
          </InputRoot>
          {errors.address?.neighborhood?.message && (
            <Feedback>{errors.address?.neighborhood?.message}</Feedback>
          )}
        </FormGroup>
        <FormGroup>
          <InputRoot>
            <Input placeholder="Cidade" {...register('address.city')} />
          </InputRoot>
          {errors.address?.city?.message && (
            <Feedback>{errors.address?.city?.message}</Feedback>
          )}
        </FormGroup>
        <FormGroup>
          <InputRoot>
            <Input placeholder="UF" {...register('address.federativeUnity')} />
          </InputRoot>
          {errors.address?.federativeUnity?.message && (
            <Feedback>{errors.address?.federativeUnity?.message}</Feedback>
          )}
        </FormGroup>
      </FormRow>
    </AddressFieldContainer>
  )
}
