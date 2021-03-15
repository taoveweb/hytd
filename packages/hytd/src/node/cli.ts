import { cac } from 'cac';
import chalk from 'chalk';

import { createLogger, LogLevel } from './logger';

const cli = cac('hytd');

// global options
interface GlobalCLIOptions {
  '--'?: string[];
  debug?: boolean | string;
  d?: boolean | string;
  filter?: string;
  f?: string;
  config?: string;
  c?: boolean | string;
  root?: string;
  base?: string;
  r?: string;
  mode?: string;
  m?: string;
  logLevel?: LogLevel;
  l?: LogLevel;
  clearScreen?: boolean;
}

cli
  .option('-c, --config <file>', `[string] use specified config file`)
  .option('-r, --root <path>', `[string] use specified root directory`)
  .option('--base <path>', `[string] public base path (default: /)`)
  .option('-l, --logLevel <level>', `[string] silent | error | warn | all`)
  .option('--clearScreen', `[boolean] allow/disable clear screen when logging`)
  .option('-d, --debug [feat]', `[string | boolean] show debug logs`)
  .option('-f, --filter <filter>', `[string] filter debug logs`)
  .option('-g, --git <filter>', `[string] filter debug logs`);

// dev
cli
  .command('[root]') // default command
  .alias('serve')
  .option('--host <host>', `[string] specify hostname`)
  .option('--port <port>', `[number] specify port`)
  .option('--https', `[boolean] use TLS + HTTP/2`)
  .option('--open [path]', `[boolean | string] open browser on startup`)
  .option('--cors', `[boolean] enable CORS`)
  .option('--strictPort', `[boolean] exit if specified port is already in use`)
  .option('-m, --mode <mode>', `[string] set env mode`)
  .option(
    '--force',
    `[boolean] force the optimizer to ignore the cache and re-bundle`
  )
  .action(async (root: string, options: GlobalCLIOptions) => {
    // output structure is preserved even after bundling so require()
    // is ok here
    try {
      //console.log(options,'yes')
    } catch (e) {
      createLogger(options.logLevel).error(
        chalk.red(`error when starting dev server:\n${e.stack}`)
      );
      process.exit(1);
    }
  });

cli.help();
cli.version(require('../../package.json').version);

cli.parse();
