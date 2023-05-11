import { useFormContext } from 'react-hook-form'
import { FormGroup } from '../../../../components/FormGroup'
import { FormRow } from '../../../../components/FormRow'
import { Input } from '../../../../components/Input'
import { InputGroupText } from '../../../../components/InputGroupText'
import { AddressFieldContainer } from './style'
import { AddAddressFormValidationFormData } from '../..'

export function AddressFields() {
  const { register } = useFormContext<AddAddressFormValidationFormData>()
  return (
    <AddressFieldContainer>
      <FormRow>
        <FormGroup>
          <Input placeholder="CEP" {...register('address.zipcode')} />
        </FormGroup>
      </FormRow>
      <FormRow>
        <FormGroup>
          <Input placeholder="Rua" {...register('address.street')} />
        </FormGroup>
      </FormRow>
      <FormRow>
        <FormGroup>
          <Input placeholder="Número" {...register('address.number')} />
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="Complemento"
            {...register('address.complement')}
          />
          <InputGroupText>Opcional</InputGroupText>
        </FormGroup>
      </FormRow>
      <FormRow>
        <FormGroup>
          <Input placeholder="Bairro" {...register('address.neighborhood')} />
        </FormGroup>
        <FormGroup>
          <Input placeholder="Cidade" {...register('address.city')} />
        </FormGroup>
        <FormGroup>
          <Input placeholder="UF" {...register('address.federativeUnity')} />
        </FormGroup>
      </FormRow>
    </AddressFieldContainer>
  )
}
