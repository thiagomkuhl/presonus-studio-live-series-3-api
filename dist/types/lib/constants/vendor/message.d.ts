export declare enum MessageCode {
    KeepAlive = "KA",
    Hello = "UM",
    JSON = "JM",
    /**
     * @deprecated Use ParamValue
     */
    Setting = "PV",
    ParamValue = "PV",
    ParamChars = "PC",
    ParamString = "PS",
    /**
     * @deprecated Use ParamStrList
     */
    DeviceList = "PL",
    ParamStrList = "PL",
    FileRequest = "FR",
    FileData = "FD",
    ZLIB = "ZB",
    Unknown1 = "BO",
    Chunk = "CK",
    /**
     * Assume the B means byte (8)
     */
    Unknown3 = "MB",
    /**
     * Linear position of main mix faders and sends
     * Assume the S means short (16)
     */
    Meter16 = "MS",
    FaderPosition = "MS"
}
