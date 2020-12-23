import {ServerOptions} from "coc.nvim";
import {exec} from "./utils"

function exist(): boolean {
  return false
}

function setup(): void {

}

function cmd(): string {
  if (!exist()) {
    setup()
  }
  return 'hie-wrapper'
}

function serverOptions(): ServerOptions {
  console.info(exec("stack path --compiler-bin"))
  return {
    command: cmd(), args: ["--lsp"],
    options: {env: {"PATH": exec("echo $PATH:`stack path --compiler-bin`")}}
  }
}

export {serverOptions}
