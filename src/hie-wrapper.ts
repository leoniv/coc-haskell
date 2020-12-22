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
  return 'stack'
}

function serverOptions(): ServerOptions {
  return {command: cmd(), args: ["exec", "--", "hie-wrapper", "--lsp"]}
}

export { serverOptions }
