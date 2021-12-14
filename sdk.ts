import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `AWSEmail` scalar type provided by AWS AppSync, represents an Email address string that complies with [RFC 822](https://www.ietf.org/rfc/rfc822.txt). For example, "**username@example.com**" is a valid Email address. */
  AWSEmail: any;
  /** The `AWSPhone` scalar type provided by AWS AppSync, represents a valid Phone Number. Phone numbers are serialized and deserialized as Strings. Segments of the phone number may be whitespace delimited or hyphenated.  The number can specify a country code at the beginning. However, United States numbers without country codes are still considered to be valid. */
  AWSPhone: any;
  /** The `AWSTimestamp` scalar type provided by AWS AppSync, represents the number of seconds that have elapsed since `1970-01-01T00:00Z`. Negative values are also accepted and these represent the number of seconds till `1970-01-01T00:00Z`.  Timestamps are serialized and deserialized as integers. The minimum supported timestamp value is **`-31557014167219200`** which corresponds to `-1000000000-01-01T00:00Z`. The maximum supported timestamp value is **`31556889864403199`** which corresponds to `1000000000-12-31T23:59:59.999999999Z`. */
  AWSTimestamp: any;
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']>;
  line1: Scalars['String'];
  line2?: Maybe<Scalars['String']>;
  postal_code: Scalars['String'];
};

export type AddressInput = {
  city?: InputMaybe<Scalars['String']>;
  line1: Scalars['String'];
  line2?: InputMaybe<Scalars['String']>;
  postal_code: Scalars['String'];
};

export type Answer = {
  __typename?: 'Answer';
  index: Scalars['Int'];
  reject: Scalars['Boolean'];
  value: Scalars['String'];
};

export type AnswerInput = {
  choice?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  text?: InputMaybe<Scalars['String']>;
};

export type AnswerQuestionnaireInput = {
  answers: Array<InputMaybe<AnswerInput>>;
  patient_id: Scalars['ID'];
  questionnaire_id: Scalars['ID'];
};

export type Consultation = {
  __typename?: 'Consultation';
  assigned?: Maybe<Prescriber>;
  events?: Maybe<Array<Maybe<ConsultationEvent>>>;
  id: Scalars['ID'];
  patient_id: Scalars['ID'];
  product_id: Scalars['ID'];
  questionnaire_answers_id: Scalars['ID'];
  status?: Maybe<ConsultationStatus>;
};

export type ConsultationEvent = {
  __typename?: 'ConsultationEvent';
  assigned?: Maybe<Prescriber>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<ConsultationStatus>;
  timestamp?: Maybe<Scalars['AWSTimestamp']>;
};

export enum ConsultationStatus {
  Accepted = 'accepted',
  Assigned = 'assigned',
  Cancelled = 'cancelled',
  Completed = 'completed',
  Created = 'created',
  Expired = 'expired',
  Pending = 'pending',
  Rejected = 'rejected',
  Requested = 'requested',
  Unassigned = 'unassigned'
}

export enum Courier {
  Hermes = 'hermes',
  RoyalMail = 'royal_mail'
}

export type CreateAnswer = {
  reject?: InputMaybe<Scalars['Boolean']>;
  value: Scalars['String'];
};

export type CreateConsultationInput = {
  product_id: Scalars['ID'];
  questionnaire_answers_id: Scalars['ID'];
};

export type CreatePatientInput = {
  address?: InputMaybe<AddressInput>;
  email?: InputMaybe<Scalars['AWSEmail']>;
  name: NameInput;
  phone?: InputMaybe<Scalars['AWSPhone']>;
};

export type CreatePaymentInput = {
  consultation_id: Scalars['ID'];
  integration: PaymentIntegration;
  payment_method_id?: InputMaybe<Scalars['String']>;
  shipping: ShippingService;
};

export type CreateQuestionnaireInput = {
  questions: Array<InputMaybe<QuestionInput>>;
  title?: InputMaybe<Scalars['String']>;
};

export type Dosage = {
  __typename?: 'Dosage';
  quantity?: Maybe<Scalars['Float']>;
  unit?: Maybe<DosageUnit>;
};

export enum DosageUnit {
  Iu = 'iu',
  Mcg = 'mcg',
  Mg = 'mg',
  Ml = 'ml'
}

export type Medication = {
  __typename?: 'Medication';
  name?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**   answer a current questionnaire */
  answerQuestionnaire?: Maybe<QuestionnaireAnswers>;
  /**   create a new consultation */
  createConsultation?: Maybe<Consultation>;
  /**   create a new patient */
  createPatient?: Maybe<Patient>;
  /**   create a new payment */
  createPayment?: Maybe<Payment>;
  /**   create a new questionnaire */
  createQuestionnaire?: Maybe<Questionnaire>;
  /**   update a current patient */
  updatePatient?: Maybe<Patient>;
};


export type MutationAnswerQuestionnaireArgs = {
  input: AnswerQuestionnaireInput;
};


export type MutationCreateConsultationArgs = {
  input: CreateConsultationInput;
};


export type MutationCreatePatientArgs = {
  input: CreatePatientInput;
};


export type MutationCreatePaymentArgs = {
  input: CreatePaymentInput;
};


export type MutationCreateQuestionnaireArgs = {
  input: CreateQuestionnaireInput;
};


export type MutationUpdatePatientArgs = {
  input: UpdatePatientInput;
};

export type Name = {
  __typename?: 'Name';
  family_name: Scalars['String'];
  given_name: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type NameInput = {
  family_name: Scalars['String'];
  given_name: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export type Patient = Person & {
  __typename?: 'Patient';
  address?: Maybe<Address>;
  email?: Maybe<Scalars['AWSEmail']>;
  id: Scalars['ID'];
  name: Name;
  phone?: Maybe<Scalars['AWSPhone']>;
  stripe?: Maybe<StripeInfo>;
};

export type Payment = {
  __typename?: 'Payment';
  amount?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  shipping?: Maybe<Shipping>;
  stripe?: Maybe<Stripe>;
};

export enum PaymentIntegration {
  RedirectUrl = 'redirect_url',
  SelfHost = 'self_host',
  SendLink = 'send_link'
}

export type Person = {
  id: Scalars['ID'];
  name: Name;
};

export type Prescriber = Person & {
  __typename?: 'Prescriber';
  id: Scalars['ID'];
  name: Name;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  price: Scalars['Int'];
  rx: Rx;
  weight?: Maybe<Weight>;
};

export type Products = {
  __typename?: 'Products';
  items?: Maybe<Array<Product>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /**   query the consultation by Id */
  getConsultation?: Maybe<Consultation>;
  /**   query the patient by Id */
  getPatient?: Maybe<Patient>;
  /**   query the product by Id */
  getProduct?: Maybe<Product>;
  /**   paginate through the products */
  getProducts?: Maybe<Products>;
  /**   query the questionnaire by Id */
  getQuestionnaire?: Maybe<Questionnaire>;
};


export type QueryGetConsultationArgs = {
  id: Scalars['ID'];
};


export type QueryGetPatientArgs = {
  id: Scalars['ID'];
};


export type QueryGetProductArgs = {
  id: Scalars['ID'];
};


export type QueryGetProductsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryGetQuestionnaireArgs = {
  id: Scalars['ID'];
};

export type Question = {
  __typename?: 'Question';
  answers?: Maybe<Array<Answer>>;
  index: Scalars['Int'];
  text: Scalars['String'];
  type: QuestionType;
};

export type QuestionInput = {
  answers?: InputMaybe<Array<CreateAnswer>>;
  text: Scalars['String'];
  type: QuestionType;
};

export enum QuestionType {
  FreeText = 'free_text',
  ManyOfMany = 'many_of_many',
  OneOfMany = 'one_of_many'
}

export type Questionnaire = {
  __typename?: 'Questionnaire';
  id: Scalars['ID'];
  questions: Array<Question>;
  title?: Maybe<Scalars['String']>;
};

export type QuestionnaireAnswer = {
  __typename?: 'QuestionnaireAnswer';
  question: Question;
  value: Array<Scalars['String']>;
};

export type QuestionnaireAnswers = {
  __typename?: 'QuestionnaireAnswers';
  answers: Array<QuestionnaireAnswer>;
  id: Scalars['ID'];
  patient_id: Scalars['ID'];
  questionnaire_id: Scalars['ID'];
};

export type Rx = {
  __typename?: 'Rx';
  dosage: Dosage;
  medication: Medication;
  quantity: Scalars['Int'];
  usage: Usage;
};

export type Shipping = {
  __typename?: 'Shipping';
  courier?: Maybe<Courier>;
  service?: Maybe<ShippingService>;
};

export enum ShippingService {
  Premium = 'premium',
  Standard = 'standard'
}

export type Stripe = {
  __typename?: 'Stripe';
  client_secret?: Maybe<Scalars['String']>;
  intent_id?: Maybe<Scalars['String']>;
};

export type StripeInfo = {
  __typename?: 'StripeInfo';
  customer_id?: Maybe<Scalars['String']>;
};

export type UpdatePatientInput = {
  address?: InputMaybe<AddressInput>;
  email?: InputMaybe<Scalars['AWSEmail']>;
  id: Scalars['ID'];
  name?: InputMaybe<NameInput>;
  phone?: InputMaybe<Scalars['AWSPhone']>;
};

export type Usage = {
  __typename?: 'Usage';
  text?: Maybe<Scalars['String']>;
};

export type Weight = {
  __typename?: 'Weight';
  quantity?: Maybe<Scalars['Float']>;
  unit?: Maybe<WeightUnit>;
};

export enum WeightUnit {
  Grams = 'grams',
  Kilograms = 'kilograms'
}

export type QuestionPartsFragment = { __typename?: 'Question', index: number, type: QuestionType, text: string, answers?: Array<{ __typename?: 'Answer', index: number, value: string, reject: boolean }> | null | undefined };

export type AnswerPartsFragment = { __typename?: 'Answer', index: number, value: string, reject: boolean };

export type CreateConsultationMutationVariables = Exact<{
  input: CreateConsultationInput;
}>;


export type CreateConsultationMutation = { __typename?: 'Mutation', createConsultation?: { __typename?: 'Consultation', id: string } | null | undefined };

export type CreatePatientMutationVariables = Exact<{
  input: CreatePatientInput;
}>;


export type CreatePatientMutation = { __typename?: 'Mutation', createPatient?: { __typename?: 'Patient', id: string } | null | undefined };

export type CreateQuestionnaireMutationVariables = Exact<{
  input: CreateQuestionnaireInput;
}>;


export type CreateQuestionnaireMutation = { __typename?: 'Mutation', createQuestionnaire?: { __typename?: 'Questionnaire', id: string, title?: string | null | undefined, questions: Array<{ __typename?: 'Question', index: number, type: QuestionType, text: string, answers?: Array<{ __typename?: 'Answer', index: number, value: string, reject: boolean }> | null | undefined }> } | null | undefined };

export type AnswerQuestionnaireMutationVariables = Exact<{
  input: AnswerQuestionnaireInput;
}>;


export type AnswerQuestionnaireMutation = { __typename?: 'Mutation', answerQuestionnaire?: { __typename?: 'QuestionnaireAnswers', id: string, answers: Array<{ __typename?: 'QuestionnaireAnswer', value: Array<string>, question: { __typename?: 'Question', index: number, type: QuestionType, text: string, answers?: Array<{ __typename?: 'Answer', index: number, value: string, reject: boolean }> | null | undefined } }> } | null | undefined };

export type GetPatientQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPatientQuery = { __typename?: 'Query', getPatient?: { __typename?: 'Patient', id: string, phone?: any | null | undefined, email?: any | null | undefined, name: { __typename?: 'Name', title?: string | null | undefined, given_name: string, family_name: string }, address?: { __typename?: 'Address', line1: string, line2?: string | null | undefined, city?: string | null | undefined, postal_code: string } | null | undefined } | null | undefined };

export type GetQuestionnaireQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetQuestionnaireQuery = { __typename?: 'Query', getQuestionnaire?: { __typename?: 'Questionnaire', id: string, title?: string | null | undefined, questions: Array<{ __typename?: 'Question', index: number, type: QuestionType, text: string, answers?: Array<{ __typename?: 'Answer', index: number, value: string, reject: boolean }> | null | undefined }> } | null | undefined };

export const AnswerPartsFragmentDoc = gql`
    fragment AnswerParts on Answer {
  index
  value
  reject
}
    `;
export const QuestionPartsFragmentDoc = gql`
    fragment QuestionParts on Question {
  index
  type
  text
  answers {
    ...AnswerParts
  }
}
    ${AnswerPartsFragmentDoc}`;
export const CreateConsultationDocument = gql`
    mutation CreateConsultation($input: CreateConsultationInput!) {
  createConsultation(input: $input) {
    id
  }
}
    `;
export const CreatePatientDocument = gql`
    mutation CreatePatient($input: CreatePatientInput!) {
  createPatient(input: $input) {
    id
  }
}
    `;
export const CreateQuestionnaireDocument = gql`
    mutation CreateQuestionnaire($input: CreateQuestionnaireInput!) {
  createQuestionnaire(input: $input) {
    id
    title
    questions {
      ...QuestionParts
    }
  }
}
    ${QuestionPartsFragmentDoc}`;
export const AnswerQuestionnaireDocument = gql`
    mutation AnswerQuestionnaire($input: AnswerQuestionnaireInput!) {
  answerQuestionnaire(input: $input) {
    id
    answers {
      question {
        ...QuestionParts
      }
      value
    }
  }
}
    ${QuestionPartsFragmentDoc}`;
export const GetPatientDocument = gql`
    query GetPatient($id: ID!) {
  getPatient(id: $id) {
    id
    name {
      title
      given_name
      family_name
    }
    phone
    email
    address {
      line1
      line2
      city
      postal_code
    }
  }
}
    `;
export const GetQuestionnaireDocument = gql`
    query GetQuestionnaire($id: ID!) {
  getQuestionnaire(id: $id) {
    id
    title
    questions {
      ...QuestionParts
    }
  }
}
    ${QuestionPartsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CreateConsultation(variables: CreateConsultationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateConsultationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateConsultationMutation>(CreateConsultationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateConsultation');
    },
    CreatePatient(variables: CreatePatientMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreatePatientMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreatePatientMutation>(CreatePatientDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreatePatient');
    },
    CreateQuestionnaire(variables: CreateQuestionnaireMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateQuestionnaireMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateQuestionnaireMutation>(CreateQuestionnaireDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateQuestionnaire');
    },
    AnswerQuestionnaire(variables: AnswerQuestionnaireMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AnswerQuestionnaireMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AnswerQuestionnaireMutation>(AnswerQuestionnaireDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AnswerQuestionnaire');
    },
    GetPatient(variables: GetPatientQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPatientQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPatientQuery>(GetPatientDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPatient');
    },
    GetQuestionnaire(variables: GetQuestionnaireQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetQuestionnaireQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetQuestionnaireQuery>(GetQuestionnaireDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetQuestionnaire');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;