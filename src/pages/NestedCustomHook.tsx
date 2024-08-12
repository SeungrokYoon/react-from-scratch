import styled from '@emotion/styled';
import useNestedHook from '@Hook/nested-custom-hook/useNestedHook';
import { v4 as uuidv4 } from 'uuid';

export default function NestedCustomHook() {
  const formId = `user_${uuidv4()}`;
  const { formValues, setter } = useNestedHook();

  return (
    <VerticalFlexContainer>
      <form>
        <label htmlFor={`name_${formId}`}>
          Name:&nbsp;
          <input
            id={`name_${formId}`}
            name="name"
            type="text"
            value={formValues.name}
            onChange={(e) => {
              setter.setName(e.target.value);
            }}
          />
        </label>
        <label htmlFor={`email_${formId}`}>
          Email:&nbsp;
          <input
            id={`email_${formId}`}
            name="email"
            type="text"
            value={formValues.email}
            onChange={(e) => {
              setter.setEmail(e.target.value);
            }}
          />
        </label>
      </form>
      <HorizontalFlexContainer gap="20px">
        <CustomSpan>Name: {formValues.name}</CustomSpan>
        <CustomSpan>Email: {formValues.email}</CustomSpan>
      </HorizontalFlexContainer>
    </VerticalFlexContainer>
  );
}

const HorizontalFlexContainer = styled.div<{ gap: string }>`
  display: flex;
  gap: ${(props) => props.gap};
`;

const VerticalFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 12px;
`;

const CustomSpan = styled.span`
  display: inline-block;
  background-color: 'red';
`;
