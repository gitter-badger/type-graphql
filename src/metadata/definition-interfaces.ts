import { TypeOptions, TypeValueResolver, ClassTypeResolver } from "../types/decorators";
import { BaseResolverDefinitions } from "../types/resolvers";

export interface HandlerDefinition extends BaseResolverDefinitions {
  getReturnType: TypeValueResolver;
  handler: Function;
  returnTypeOptions: TypeOptions;
}

export interface FieldResolverDefinition extends BaseResolverDefinitions {
  kind: "internal" | "external";
  handler?: Function;
  getParentType?: ClassTypeResolver;
}

export interface ResolverDefinition {
  target: Function;
  getParentType: ClassTypeResolver;
}

export interface ClassDefinition {
  name: string;
  target: Function;
  fields?: FieldDefinition[];
}

export interface FieldDefinition {
  target: Function;
  name: string;
  getType: TypeValueResolver;
  typeOptions: TypeOptions;
  params?: ParamDefinition[];
}

/* Param definitions */

export interface BasicParamDefinition {
  target: Function;
  methodName: string;
  index: number;
}
export interface SimpleParamDefinition extends BasicParamDefinition {
  kind: "context" | "root";
}
export interface ArgParamDefinition extends BasicParamDefinition {
  kind: "arg";
  name: string;
  getType: TypeValueResolver;
  typeOptions: TypeOptions;
}
export interface ArgsParamDefinition extends BasicParamDefinition {
  kind: "args";
  getType: TypeValueResolver;
  typeOptions: TypeOptions;
}
export type ParamDefinition = SimpleParamDefinition | ArgParamDefinition | ArgsParamDefinition;
