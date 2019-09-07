declare function runSync(commandOrOptions: string | Object, options?: Object): void
declare function runAsync(commandOrOptions: string | Object, options?: Object): Promise<any>
declare function scripts(scriptsObj: Object): void
declare function series(...commands: (string | Object)[]): void
declare function parallel(...commands: (string | Object)[]): Promise<any[]>

export { runSync, runAsync, scripts, series, parallel }
