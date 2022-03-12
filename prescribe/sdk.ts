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
  /** The `AWSJSON` scalar type provided by AWS AppSync, represents a JSON string that complies with [RFC 8259](https://tools.ietf.org/html/rfc8259).  Maps like "**{\\"upvotes\\": 10}**", lists like "**[1,2,3]**", and scalar values like "**\\"AWSJSON example string\\"**", "**1**", and "**true**" are accepted as valid JSON and will automatically be parsed and loaded in the resolver mapping templates as Maps, Lists, or Scalar values rather than as the literal input strings.  Invalid JSON strings like "**{a: 1}**", "**{'a': 1}**" and "**Unquoted string**" will throw GraphQL validation errors. */
  AWSJSON: any;
  /** The `AWSURL` scalar type provided by AWS AppSync, represents a valid URL string (Ex: <https://www.amazon.com/>). The URL may use any scheme and may also be a local URL (Ex: <http://localhost/>).  URLs without schemes like "**amazon.com**" or "**www.amazon.com**" are considered invalid. URLs which contain double slashes (two consecutive forward slashes) in their path are also considered invalid. */
  AWSURL: any;
};

export type CreateEndpointInput = {
  description?: InputMaybe<Scalars['String']>;
  resources?: InputMaybe<Array<Resource>>;
  url: Scalars['AWSURL'];
};

export type Data = {
  __typename?: 'Data';
  object?: Maybe<Scalars['AWSJSON']>;
};

export type Endpoint = {
  __typename?: 'Endpoint';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  resources?: Maybe<Array<Maybe<Resource>>>;
  url?: Maybe<Scalars['AWSURL']>;
};

export type Event = {
  __typename?: 'Event';
  account_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  data?: Maybe<Data>;
  id: Scalars['ID'];
  type?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createEndpoint?: Maybe<Endpoint>;
  deleteEndpoint?: Maybe<Scalars['Boolean']>;
  updateEndpoint?: Maybe<Endpoint>;
};


export type MutationCreateEndpointArgs = {
  input: CreateEndpointInput;
};


export type MutationDeleteEndpointArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateEndpointArgs = {
  input?: InputMaybe<UpdateEndpointInput>;
};

export type Query = {
  __typename?: 'Query';
  getEndpoint?: Maybe<Endpoint>;
  getEndpointSecret?: Maybe<Scalars['String']>;
  getEndpoints?: Maybe<Array<Maybe<Endpoint>>>;
  getEvent?: Maybe<Event>;
  getEvents?: Maybe<Array<Maybe<Event>>>;
};


export type QueryGetEndpointArgs = {
  id: Scalars['ID'];
};


export type QueryGetEndpointSecretArgs = {
  id: Scalars['ID'];
};


export type QueryGetEventArgs = {
  id: Scalars['ID'];
};


export type QueryGetEventsArgs = {
  end?: InputMaybe<Scalars['String']>;
  resource?: InputMaybe<Resource>;
  start?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export enum Resource {
  Account = 'account',
  Consultation = 'consultation',
  Patient = 'patient',
  Payment = 'payment',
  Prescription = 'prescription',
  Product = 'product',
  Questionnaire = 'questionnaire',
  Shipment = 'shipment'
}

export type UpdateEndpointInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  resources?: InputMaybe<Array<Resource>>;
  url: Scalars['AWSURL'];
};

export type GetEventQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetEventQuery = { __typename?: 'Query', getEvent?: { __typename?: 'Event', id: string, type?: string | null | undefined, account_id?: string | null | undefined, created_at?: string | null | undefined, data?: { __typename?: 'Data', object?: any | null | undefined } | null | undefined } | null | undefined };


export const GetEventDocument = gql`
    query GetEvent($id: ID!) {
  getEvent(id: $id) {
    id
    type
    account_id
    created_at
    data {
      object
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetEvent(variables: GetEventQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetEventQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetEventQuery>(GetEventDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetEvent');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;