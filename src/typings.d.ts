// systemJS module definition
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// json default definition
declare module '*.json' {
  const value: any;
  export default value;
}
