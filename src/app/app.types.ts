export interface userLoginData{
          email:string;
          password:string;
}
export interface IResult{
          name:string,
          role:string,
          token:string,
          tokenExpiry:string,
          userId:string,
}
export interface IUsereDetails{
          data:IResult
}

export interface IData{
          data:IPoke
}

export interface IPoke{
          id:string,
          name:string,
          level:number,
          type:string,
          createdOn:string,
          updatedOn:string,
          isSelected:boolean
}

export interface ICreatePoke{
          name:string,
          level:string,
          type:number,
          isSelected:boolean
}