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
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  city: Scalars['String'];
  line1: Scalars['String'];
  line2?: InputMaybe<Scalars['String']>;
  postal_code: Scalars['String'];
};

export enum Courier {
  Hermes = 'hermes',
  RoyalMail = 'royal_mail'
}

export type CreateShipmentInput = {
  address: AddressInput;
  patient: PatientInput;
  products: Array<ProductInput>;
  service: Service;
};

export type ISender = {
  address?: Maybe<Address>;
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createShipment?: Maybe<Shipment>;
};


export type MutationCreateShipmentArgs = {
  input: CreateShipmentInput;
};

export type Name = {
  __typename?: 'Name';
  family_name?: Maybe<Scalars['String']>;
  given_name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Patient = {
  __typename?: 'Patient';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Name>;
  phone?: Maybe<Scalars['String']>;
};

export type PatientInput = {
  id: Scalars['ID'];
};

export type Pharmacy = {
  __typename?: 'Pharmacy';
  address?: Maybe<Address>;
  id: Scalars['ID'];
};

export type Product = {
  __typename?: 'Product';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type ProductInput = {
  id: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getShipment?: Maybe<Shipment>;
};


export type QueryGetShipmentArgs = {
  id: Scalars['ID'];
};

export type Sender = Pharmacy;

export enum Service {
  Premium = 'premium',
  Standard = 'standard'
}

export type Shipment = {
  __typename?: 'Shipment';
  address?: Maybe<Address>;
  courier?: Maybe<Courier>;
  created_at?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  patient?: Maybe<Patient>;
  products?: Maybe<Array<Maybe<Product>>>;
  sender?: Maybe<Sender>;
  service?: Maybe<Service>;
  status?: Maybe<ShipmentStatus>;
  tracking?: Maybe<Tracking>;
};

export enum ShipmentStatus {
  Collected = 'collected',
  Confirmed = 'confirmed',
  Delivered = 'delivered',
  EnRoute = 'en_route',
  Pending = 'pending',
  Prepared = 'prepared',
  Returned = 'returned'
}

export type Tracking = {
  __typename?: 'Tracking';
  code?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ProductPartsFragment = { __typename?: 'Product', id?: string | null | undefined, name?: string | null | undefined, quantity?: number | null | undefined };

export type PatientPartsFragment = { __typename?: 'Patient', id?: string | null | undefined, name?: { __typename?: 'Name', title?: string | null | undefined, given_name?: string | null | undefined, family_name?: string | null | undefined } | null | undefined };

export type AddressPartsFragment = { __typename?: 'Address', line1?: string | null | undefined, line2?: string | null | undefined, city?: string | null | undefined, postal_code?: string | null | undefined };

export type SenderPartsFragment = { __typename?: 'Pharmacy', id: string, address?: { __typename?: 'Address', line1?: string | null | undefined, line2?: string | null | undefined, city?: string | null | undefined, postal_code?: string | null | undefined } | null | undefined };

export type CreateShipmentMutationVariables = Exact<{
  input: CreateShipmentInput;
}>;


export type CreateShipmentMutation = { __typename?: 'Mutation', createShipment?: { __typename?: 'Shipment', id: string, courier?: Courier | null | undefined, service?: Service | null | undefined, status?: ShipmentStatus | null | undefined, created_at?: string | null | undefined, products?: Array<{ __typename?: 'Product', id?: string | null | undefined, name?: string | null | undefined, quantity?: number | null | undefined } | null | undefined> | null | undefined, patient?: { __typename?: 'Patient', id?: string | null | undefined, name?: { __typename?: 'Name', title?: string | null | undefined, given_name?: string | null | undefined, family_name?: string | null | undefined } | null | undefined } | null | undefined, address?: { __typename?: 'Address', line1?: string | null | undefined, line2?: string | null | undefined, city?: string | null | undefined, postal_code?: string | null | undefined } | null | undefined, sender?: { __typename?: 'Pharmacy', id: string, address?: { __typename?: 'Address', line1?: string | null | undefined, line2?: string | null | undefined, city?: string | null | undefined, postal_code?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type GetShipmentQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetShipmentQuery = { __typename?: 'Query', getShipment?: { __typename?: 'Shipment', id: string, courier?: Courier | null | undefined, service?: Service | null | undefined, status?: ShipmentStatus | null | undefined, created_at?: string | null | undefined, products?: Array<{ __typename?: 'Product', id?: string | null | undefined, name?: string | null | undefined, quantity?: number | null | undefined } | null | undefined> | null | undefined, patient?: { __typename?: 'Patient', id?: string | null | undefined, name?: { __typename?: 'Name', title?: string | null | undefined, given_name?: string | null | undefined, family_name?: string | null | undefined } | null | undefined } | null | undefined, address?: { __typename?: 'Address', line1?: string | null | undefined, line2?: string | null | undefined, city?: string | null | undefined, postal_code?: string | null | undefined } | null | undefined, sender?: { __typename?: 'Pharmacy', id: string, address?: { __typename?: 'Address', line1?: string | null | undefined, line2?: string | null | undefined, city?: string | null | undefined, postal_code?: string | null | undefined } | null | undefined } | null | undefined, tracking?: { __typename?: 'Tracking', code?: string | null | undefined, url?: string | null | undefined } | null | undefined } | null | undefined };

export const ProductPartsFragmentDoc = gql`
    fragment ProductParts on Product {
  id
  name
  quantity
}
    `;
export const PatientPartsFragmentDoc = gql`
    fragment PatientParts on Patient {
  id
  name {
    title
    given_name
    family_name
  }
}
    `;
export const AddressPartsFragmentDoc = gql`
    fragment AddressParts on Address {
  line1
  line2
  city
  postal_code
}
    `;
export const SenderPartsFragmentDoc = gql`
    fragment SenderParts on Sender {
  ... on Pharmacy {
    id
    address {
      ...AddressParts
    }
  }
}
    ${AddressPartsFragmentDoc}`;
export const CreateShipmentDocument = gql`
    mutation CreateShipment($input: CreateShipmentInput!) {
  createShipment(input: $input) {
    id
    products {
      ...ProductParts
    }
    patient {
      ...PatientParts
    }
    address {
      ...AddressParts
    }
    courier
    service
    status
    sender {
      ...SenderParts
    }
    created_at
  }
}
    ${ProductPartsFragmentDoc}
${PatientPartsFragmentDoc}
${AddressPartsFragmentDoc}
${SenderPartsFragmentDoc}`;
export const GetShipmentDocument = gql`
    query GetShipment($id: ID!) {
  getShipment(id: $id) {
    id
    products {
      ...ProductParts
    }
    patient {
      ...PatientParts
    }
    address {
      ...AddressParts
    }
    courier
    service
    status
    sender {
      ...SenderParts
    }
    tracking {
      code
      url
    }
    created_at
  }
}
    ${ProductPartsFragmentDoc}
${PatientPartsFragmentDoc}
${AddressPartsFragmentDoc}
${SenderPartsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CreateShipment(variables: CreateShipmentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateShipmentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateShipmentMutation>(CreateShipmentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateShipment');
    },
    GetShipment(variables: GetShipmentQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetShipmentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetShipmentQuery>(GetShipmentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetShipment');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;