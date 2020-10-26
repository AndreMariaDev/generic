export interface Parameters {
  key:String;
  values:object;
}

export class QueryOptionsGeneric{

  constructor(paramsObject:Array<Parameters>){
      this.paramsObject = paramsObject;
  }

  private paramsObject:Array<Parameters>;

  public toQueryString():string {
      return Object
      .keys(this.paramsObject)
      .map(key => `${encodeURIComponent(this.paramsObject[key].key)}=${encodeURIComponent(this.paramsObject[key].values)}`)
      .join('&');
  }
}
