export declare const Channel: {
    readonly MONO: "mono";
    readonly MASTER: "master";
    readonly LINE: "line";
    readonly RETURN: "return";
    readonly FXRETURN: "fxreturn";
    readonly TALKBACK: "talkback";
    readonly AUX: "aux";
    readonly FX: "fxbus";
    readonly SUB: "sub";
    readonly MAIN: "main";
    readonly DCA: "filtergroup";
};
export type ChannelTypes = keyof typeof Channel;
