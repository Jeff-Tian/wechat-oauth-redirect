declare module "*.svg" {
    const content: any;
    export default content;
}

declare module "*.jpg" {
    const content: any;
    export default content;
}

declare module "!!raw-loader!*" {
    const content: string;
    export = content;
}
