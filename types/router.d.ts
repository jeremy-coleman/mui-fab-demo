
type IRouterManager = {
    use(pathOrRouter: string | IRouter | IRequestHandler, router?: IRouter | IRequestHandler) : void;
}


type IRouter = {
    handleRequest(req : IRequest, next?: IRequestHandler) : Promise<any> | any;
}


type IRequestHandler = {
    (req?: IRequest, next?: IRequestHandler) : Promise<any> | any;
}

type IRequest = {
    app?: any;
    basePath?: string;
    path?: string;
    params?: { [key: string] : any };
    [key : string] : any;
}

type IPathTestResult = {
    match: boolean;
    params?: any;
}

type IPathTemplateOptions = {
    sensitive?: boolean;
    strict?: boolean;
    end?: boolean;
    delimiter?: string;
};

type IPathTemplate = {
    text: string;
    paramCount: number;
    paramNames: string[];
    test(path : string) : IPathTestResult;
    toPath(params : any) : string;
}

type IExactPathOptions = {
    allowTrailingSlash?: boolean;
}

type IReactRouterOptions = {
    exportKey?: string;
    exact?: boolean;
    allowTrailingSlash?: boolean;
    requestPropKey?: string;
}

type IConfig = {
    (env : any) : Promise<any>;
}

type IConfigMap = {
    [key : string] : IConfig;
}

type IConfigRouterOptions = {
    env?: any;
    configMap: IConfigMap;
}
