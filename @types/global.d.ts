import { Action, AnyAction } from 'redux';
import { ComponentType, ReactElement, ReactNode } from 'react';
import * as React from 'react';


declare global {
  type Reducer<S = any, A extends Action = AnyAction> = (
    state: S,
    action: A
  ) => S;
}