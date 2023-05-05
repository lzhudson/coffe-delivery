import { FormGroup } from '../../../../components/FormGroup'
import { FormRow } from '../../../../components/FormRow'
import { Input } from '../../../../components/Input'
import { InputGroupText } from '../../../../components/InputGroupText'
import { AddressFieldContainer } from './style'

export function AddressFields() {
  return (
    <AddressFieldContainer>
      <FormRow>
        <FormGroup>
          <Input placeholder="CEP" />
        </FormGroup>
      </FormRow>
      <FormRow>
        <FormGroup>
          <Input placeholder="Rua" />
        </FormGroup>
      </FormRow>
      <FormRow>
        <FormGroup>
          <Input placeholder="Número" />
        </FormGroup>
        <FormGroup>
          <Input placeholder="Complemento" />
          <InputGroupText>Opcional</InputGroupText>
        </FormGroup>
      </FormRow>
      <FormRow>
        <FormGroup>
          <Input placeholder="Bairro" />
        </FormGroup>
        <FormGroup>
          <Input placeholder="Cidade" />
        </FormGroup>
        <FormGroup>
          <Input placeholder="UF" />
        </FormGroup>
      </FormRow>
    </AddressFieldContainer>
  )
}
