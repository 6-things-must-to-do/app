declare module '@stmt/type-helper' {
  type FuncUniqueParam<T extends (param: any) => any> = T extends (
    param: infer P
  ) => any
    ? P
    : never;
}
