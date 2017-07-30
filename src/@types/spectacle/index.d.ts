declare module "spectacle/lib/utils/preloader" {
	const preloader: (obj: object) => void;
	export default preloader;
}

declare module "spectacle/lib/themes/default" {
    import { SpectacleProps } from "spectacle";
    const createTheme: (...args: object[]) => SpectacleProps['theme'];
    export default createTheme;
}

declare module "spectacle" {

	export interface DeckProps {
		transition?:transitionType[],
		transitionDuration?:number,
		progress?:progressType,
		controls?:boolean,
        theme?: { [key: string ]: string | number }
    }
}
