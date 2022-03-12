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
  /** The `AWSDateTime` scalar type provided by AWS AppSync, represents a valid ***extended*** [ISO 8601 DateTime](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) string. In other words, this scalar type accepts datetime strings of the form `YYYY-MM-DDThh:mm:ss.SSSZ`.  The scalar can also accept "negative years" of the form `-YYYY` which correspond to years before `0000`. For example, "**-2017-01-01T00:00Z**" and "**-9999-01-01T00:00Z**" are both valid datetime strings.  The field after the two digit seconds field is a nanoseconds field. It can accept between 1 and 9 digits. So, for example, "**1970-01-01T12:00:00.2Z**", "**1970-01-01T12:00:00.277Z**" and "**1970-01-01T12:00:00.123456789Z**" are all valid datetime strings.  The seconds and nanoseconds fields are optional (the seconds field must be specified if the nanoseconds field is to be used).  The [time zone offset](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators) is compulsory for this scalar. The time zone offset must either be `Z` (representing the UTC time zone) or be in the format `±hh:mm:ss`. The seconds field in the timezone offset will be considered valid even though it is not part of the ISO 8601 standard. */
  AWSDateTime: any;
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
  patient: PatientInput;
  questionnaire_id: Scalars['ID'];
};

export type AsynchronousConsultation = IConsultation & {
  __typename?: 'AsynchronousConsultation';
  id: Scalars['ID'];
  patient: Patient;
  prescriber?: Maybe<Prescriber>;
  products: Array<Product>;
  questionnaire_answers: QuestionnaireAnswers;
  reject_reason?: Maybe<Scalars['String']>;
  rejected?: Maybe<Scalars['Boolean']>;
  status: ConsultationStatus;
};

export type Consultation = AsynchronousConsultation;

export enum ConsultationInputType {
  Asynchronous = 'asynchronous',
  InPerson = 'in_person',
  Synchronous = 'synchronous'
}

export enum ConsultationStatus {
  Abandoned = 'abandoned',
  Accepted = 'accepted',
  Assigned = 'assigned',
  Cancelled = 'cancelled',
  Completed = 'completed',
  Confirmed = 'confirmed',
  Expired = 'expired',
  Pending = 'pending',
  Rejected = 'rejected',
  Started = 'started',
  Unassigned = 'unassigned'
}

export type Cosmetic = Product & {
  __typename?: 'Cosmetic';
  id: Scalars['ID'];
};

export type CreateAnswer = {
  reject?: InputMaybe<Scalars['Boolean']>;
  value: Scalars['String'];
};

export type CreateConsultationInput = {
  patient?: InputMaybe<PatientInput>;
  products?: InputMaybe<Array<ProductInput>>;
  questionnaire_answers?: InputMaybe<QuestionnaireAnswersInput>;
  type: ConsultationInputType;
};

export type CreateQuestionnaireInput = {
  questions: Array<InputMaybe<QuestionInput>>;
  title?: InputMaybe<Scalars['String']>;
};

export type IConsultation = {
  id: Scalars['ID'];
  patient: Patient;
  prescriber?: Maybe<Prescriber>;
  status: ConsultationStatus;
};

export type MedicalDevice = Product & {
  __typename?: 'MedicalDevice';
  id: Scalars['ID'];
};

export type MedicinalProduct = Product & {
  __typename?: 'MedicinalProduct';
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**   answer an existing questionnaire */
  answerQuestionnaire?: Maybe<QuestionnaireAnswers>;
  /**   create a consultation */
  createConsultation?: Maybe<Consultation>;
  /**   create a new questionnaire */
  createQuestionnaire?: Maybe<Questionnaire>;
};


export type MutationAnswerQuestionnaireArgs = {
  input: AnswerQuestionnaireInput;
};


export type MutationCreateConsultationArgs = {
  input: CreateConsultationInput;
};


export type MutationCreateQuestionnaireArgs = {
  input: CreateQuestionnaireInput;
};

export type Name = {
  __typename?: 'Name';
  family_name?: Maybe<Scalars['String']>;
  given_name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Patient = {
  __typename?: 'Patient';
  id: Scalars['ID'];
  name?: Maybe<Name>;
};

export type PatientInput = {
  id: Scalars['ID'];
};

export type Prescriber = {
  __typename?: 'Prescriber';
  id: Scalars['ID'];
  name?: Maybe<Name>;
  register?: Maybe<Register>;
};

export type Product = {
  id: Scalars['ID'];
};

export type ProductInput = {
  id: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  /**   query the consultation by Id */
  getConsultation?: Maybe<Consultation>;
  /**   query the questionnaire by Id */
  getQuestionnaire?: Maybe<Questionnaire>;
  /**   query the questionnaire answers by Id */
  getQuestionnaireAnswers?: Maybe<QuestionnaireAnswers>;
  /**   query the questionnaires */
  getQuestionnaires?: Maybe<Questionnaires>;
};


export type QueryGetConsultationArgs = {
  id: Scalars['ID'];
};


export type QueryGetQuestionnaireArgs = {
  id: Scalars['ID'];
};


export type QueryGetQuestionnaireAnswersArgs = {
  id: Scalars['ID'];
};


export type QueryGetQuestionnairesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  next_token?: InputMaybe<Scalars['String']>;
};

export type Question = {
  __typename?: 'Question';
  answers?: Maybe<Array<Answer>>;
  index: Scalars['Int'];
  info?: Maybe<Array<Maybe<Scalars['String']>>>;
  required?: Maybe<Scalars['Boolean']>;
  text: Scalars['String'];
  type: QuestionType;
};

export type QuestionInput = {
  answers?: InputMaybe<Array<CreateAnswer>>;
  info?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  created_at?: Maybe<Scalars['AWSDateTime']>;
  id: Scalars['ID'];
  questions: Array<Question>;
  title?: Maybe<Scalars['String']>;
};

export type QuestionnaireAnswer = {
  __typename?: 'QuestionnaireAnswer';
  choice?: Maybe<Array<Maybe<Scalars['Int']>>>;
  question: Question;
  text?: Maybe<Scalars['String']>;
  value: Array<Scalars['String']>;
};

export type QuestionnaireAnswers = {
  __typename?: 'QuestionnaireAnswers';
  answers: Array<QuestionnaireAnswer>;
  created_at?: Maybe<Scalars['AWSDateTime']>;
  id: Scalars['ID'];
  questionnaire: Questionnaire;
};

export type QuestionnaireAnswersInput = {
  id: Scalars['ID'];
};

export type Questionnaires = {
  __typename?: 'Questionnaires';
  items?: Maybe<Array<Questionnaire>>;
  next_token?: Maybe<Scalars['String']>;
};

export type Register = {
  __typename?: 'Register';
  type?: Maybe<RegisterType>;
  value?: Maybe<Scalars['String']>;
};

export enum RegisterType {
  Gmc = 'gmc',
  Gphc = 'gphc',
  Nmc = 'nmc'
}

export type Supplement = Product & {
  __typename?: 'Supplement';
  id: Scalars['ID'];
};

export type QuestionPartsFragment = { __typename?: 'Question', index: number, type: QuestionType, text: string, info?: Array<string | null | undefined> | null | undefined, answers?: Array<{ __typename?: 'Answer', index: number, value: string, reject: boolean }> | null | undefined };

export type AnswerPartsFragment = { __typename?: 'Answer', index: number, value: string, reject: boolean };

export type CreateConsultationMutationVariables = Exact<{
  input: CreateConsultationInput;
}>;


export type CreateConsultationMutation = { __typename?: 'Mutation', createConsultation?: { __typename: 'AsynchronousConsultation', id: string, status: ConsultationStatus, patient: { __typename?: 'Patient', id: string, name?: { __typename?: 'Name', given_name?: string | null | undefined, family_name?: string | null | undefined } | null | undefined }, products: Array<{ __typename?: 'Cosmetic' } | { __typename?: 'MedicalDevice' } | { __typename?: 'MedicinalProduct', id: string } | { __typename?: 'Supplement' }>, questionnaire_answers: { __typename?: 'QuestionnaireAnswers', id: string } } | null | undefined };

export type CreateQuestionnaireMutationVariables = Exact<{
  input: CreateQuestionnaireInput;
}>;


export type CreateQuestionnaireMutation = { __typename?: 'Mutation', createQuestionnaire?: { __typename?: 'Questionnaire', id: string, title?: string | null | undefined, questions: Array<{ __typename?: 'Question', index: number, type: QuestionType, text: string, info?: Array<string | null | undefined> | null | undefined, answers?: Array<{ __typename?: 'Answer', index: number, value: string, reject: boolean }> | null | undefined }> } | null | undefined };

export type AnswerQuestionnaireMutationVariables = Exact<{
  input: AnswerQuestionnaireInput;
}>;


export type AnswerQuestionnaireMutation = { __typename?: 'Mutation', answerQuestionnaire?: { __typename?: 'QuestionnaireAnswers', id: string, created_at?: any | null | undefined, answers: Array<{ __typename?: 'QuestionnaireAnswer', value: Array<string>, question: { __typename?: 'Question', index: number, type: QuestionType, text: string, info?: Array<string | null | undefined> | null | undefined, answers?: Array<{ __typename?: 'Answer', index: number, value: string, reject: boolean }> | null | undefined } }>, questionnaire: { __typename?: 'Questionnaire', id: string } } | null | undefined };

export type GetQuestionnaireQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetQuestionnaireQuery = { __typename?: 'Query', getQuestionnaire?: { __typename?: 'Questionnaire', id: string, title?: string | null | undefined, questions: Array<{ __typename?: 'Question', index: number, type: QuestionType, text: string, info?: Array<string | null | undefined> | null | undefined, answers?: Array<{ __typename?: 'Answer', index: number, value: string, reject: boolean }> | null | undefined }> } | null | undefined };

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
  info
  answers {
    ...AnswerParts
  }
}
    ${AnswerPartsFragmentDoc}`;
export const CreateConsultationDocument = gql`
    mutation CreateConsultation($input: CreateConsultationInput!) {
  createConsultation(input: $input) {
    __typename
    ... on AsynchronousConsultation {
      id
      patient {
        id
        name {
          given_name
          family_name
        }
      }
      status
      products {
        ... on MedicinalProduct {
          id
        }
      }
      questionnaire_answers {
        id
      }
    }
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
    created_at
    questionnaire {
      id
    }
  }
}
    ${QuestionPartsFragmentDoc}`;
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
    CreateQuestionnaire(variables: CreateQuestionnaireMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateQuestionnaireMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateQuestionnaireMutation>(CreateQuestionnaireDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateQuestionnaire');
    },
    AnswerQuestionnaire(variables: AnswerQuestionnaireMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AnswerQuestionnaireMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AnswerQuestionnaireMutation>(AnswerQuestionnaireDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AnswerQuestionnaire');
    },
    GetQuestionnaire(variables: GetQuestionnaireQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetQuestionnaireQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetQuestionnaireQuery>(GetQuestionnaireDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetQuestionnaire');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;