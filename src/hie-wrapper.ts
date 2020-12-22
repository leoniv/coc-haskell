import {ServerOptions} from "coc.nvim";

function exist(): boolean {
  return false
}

function setup(): void {

}

function cmd(): string {
  if (! exist()) {
    setup()
  }
  return 'FIXME'
}

function serverOptions(): ServerOptions {
  return {command: cmd(), args: []}
}

export { serverOptions }
