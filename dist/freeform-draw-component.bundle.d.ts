declare namespace IIIFComponents {
    class FreeformDrawComponent extends _Components.BaseComponent {
        constructor(options: IFreeformDrawComponentOptions);
        test(): void;
        protected _init(): boolean;
        protected _getDefaultOptions(): IFreeformDrawComponentOptions;
        protected _resize(): void;
    }
}
declare namespace IIIFComponents.FreeformDrawComponent {
    class Events {
        static TEST: string;
    }
}

declare namespace IIIFComponents {
    interface IFreeformDrawComponentOptions extends _Components.IBaseComponentOptions {
    }
}
